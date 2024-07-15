require('dotenv').config();
require('express-async-errors');
const express=require('express');
const{StatusCodes}=require('http-status-codes');
const connectToDB=require('./db/dbconnect');
const authRouter=require('./router/authRouter');
const jobsRouter=require('./router/jobsRouter');
const errorHandlerMiddleware=require('./middleware/errorHandler');
//secrurity
const{rateLimit}=require('express-rate-limit');
const helmet=require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const { xss } = require('express-xss-sanitizer');

const PORT=process.env.PORT||5000;
const app=express();

//middleware
app.use(bodyParser.json({limit:'1kb'}));
app.use(bodyParser.urlencoded({extended: true, limit:'1kb'}));
app.use(xss());
app.use(express.json());
app.use(cors());
app.use(rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
}));
app.use(helmet());
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/jobs',jobsRouter);
app.use(errorHandlerMiddleware);


app.all('*',(req,res)=>{
    res.status(StatusCodes.NOT_FOUND).json('Route not found.');
});

connectToDB(process.env.MONGO_URI).then((val)=>{
    console.log('connected to db');
    app.listen(PORT,()=>{
        console.log(`server listening on port ${PORT}`);
    })
}).catch((err)=>{
    console.log(err);
});

