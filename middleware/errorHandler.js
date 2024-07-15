const{StatusCodes}=require('http-status-codes');

const errorHandlerMiddleware=(err,req,res,next)=>{
    const customErrObj={
        message:err.message||'Something went wrong.',
        statusCode:err.statusCode||StatusCodes.INTERNAL_SERVER_ERROR
    }

    //validation error
    if(err.name==='ValidationError'){
        customErrObj.message=Object.values(err.errors).map((item)=>item.message).join(',');
        customErrObj.statusCode=StatusCodes.BAD_REQUEST;
    }

    //duplicate error
    if(err.code===11000){
        customErrObj.message="Kindly provide unique email.";
        customErrObj.statusCode=StatusCodes.BAD_REQUEST;
    }

    //cast error
    if(err.name==="CastError"){
        customErrObj.message=`${err.value} is invalid.`;
        customErrObj.statusCode=StatusCodes.BAD_REQUEST;
    }

    return res.status(customErrObj.statusCode).json({success:false,error:customErrObj.message});
}

module.exports=errorHandlerMiddleware;

// const asyncWrapper=(fn)=>{
//     return async(req,res,next)=>{
//         try{
//             await fn(req,res,next);
//         }catch(err){
//             next(err);
//         }
//     }
// }