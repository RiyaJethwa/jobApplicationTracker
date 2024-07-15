const userModel=require('../../model/userModel');
const{StatusCodes}=require('http-status-codes');
const{validateString}=require('../../validation');
const{notFoundErr,badReqErr}=require('../../errors/allErrors');

const login=async(req,res)=>{
    const{email,password}=req.body;
    console.log(email,password);
    if(!validateString(email)){
        throw badReqErr('Kindly provide valid email.');
    }
    if(!validateString(password)){
        throw badReqErr('Kindly provide valid password.');
    }
    console.log('validated');
    const user=await userModel.findOne({email:email});
    console.log(user);
    if(!user){
        throw notFoundErr('User not found.');
    }
    const isPasswordValid=await user.verifyPassword(password);
    if(!isPasswordValid){
        throw badReqErr('Incorrect password.');
    }
    return res.status(StatusCodes.OK).json({success:true,data:{user:{username:user.username,email:user.email},jwtToken:user.createJwtToken()}})
}

const register=async(req,res)=>{
    const{username,email,password}=req.body;
    const user=await userModel.create({username,email,password});
    return res.status(StatusCodes.CREATED).json({success:true,data:{user:{username:user.username,email:user.email},jwtToken:user.createJwtToken()}});
}

module.exports={
    login,
    register
};
