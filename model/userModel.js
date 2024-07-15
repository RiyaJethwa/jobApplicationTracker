require('dotenv').config();
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

const userDocumentSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Must provide valid username.'],
        trim:true
    },
    email:{
        type:String,
        required:[true,'Must provoide valid email.'],
        trim:true,
        match:[/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/gm,'Must provide valid email.'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Must provide valid password'],
        trim:true
    }
});

userDocumentSchema.pre('save',async function(next){
    const salt=await bcrypt.genSalt(10);
    const encodedPassword=await bcrypt.hash(this.password,salt);
    this.password=encodedPassword;
    next();
});

userDocumentSchema.methods.createJwtToken=function(){
    const jwtToken=jwt.sign({userId:this._id,username:this.username},process.env.JWT_SECRET_KEY,{expiresIn:process.env.JWT_EXPIRY})
    return jwtToken;
}

userDocumentSchema.methods.verifyPassword=async function(password){
    const isPasswordValid=await bcrypt.compare(password,this.password);
    return isPasswordValid;
}

const userModel=mongoose.model('users',userDocumentSchema);

module.exports=userModel;