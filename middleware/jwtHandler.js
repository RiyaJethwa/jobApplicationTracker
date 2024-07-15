require('dotenv').config();
const{unauthErr}=require('../errors/allErrors');
const{validateString}=require('../validation');
const jwt=require('jsonwebtoken');

const jwtHandlerMiddleware=(req,res,next)=>{
    try{
        const jwtStr=req.headers.authorization;
        if(!validateString(jwtStr) || !jwtStr.startsWith('Bearer ')){
            return next(unauthErr('Kindly enter valid jwt token.'));
        }
        const jwtToken=jwtStr.split(' ')[1];
        const jwtPayload=jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);
        req.jwtPayload=jwtPayload;
        return next();
    }catch(err){
        console.log(err);
        return next(unauthErr('Incorrect jwt token.'));
    }
}

module.exports=jwtHandlerMiddleware;