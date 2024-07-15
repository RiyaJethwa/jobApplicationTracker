const jobsModel=require('../../model/jobsModel');
const{StatusCodes}=require('http-status-codes');
const{notFoundErr}=require('../../errors/allErrors');

const getJobsList=async(req,res)=>{
    const{userId}=req.jwtPayload;
    const jobList=await jobsModel.find({createdBy:userId}).select('-createdBy');
    if(!jobList){
        throw notFoundErr('Job list not found.');
    }
    res.status(StatusCodes.OK).json({success:true,data:jobList});
}

const getSingleJob=async(req,res)=>{
    const{userId}=req.jwtPayload;
    const{jobId}=req.params;
    const job=await jobsModel.findOne({_id:jobId,createdBy:userId}).select('-createdBy');
    if(!job){
        throw notFoundErr('Job not found.');
    }
    res.status(StatusCodes.OK).json({success:true,data:job});
}

const postJob=async(req,res)=>{
    const{userId}=req.jwtPayload;
    const{company,position,status}=req.body;
    const job=await jobsModel.create({company,position,status,createdBy:userId});
    if(!job){
        throw notFoundErr('Could not post job.');
    }
    res.status(StatusCodes.CREATED).json({success:true,data:job});
}

const updateJob=async(req,res)=>{
    const{userId}=req.jwtPayload;
    const{jobId}=req.params;
    const{company,position,status}=req.body;
    const job=await jobsModel.findOneAndUpdate({_id:jobId,createdBy:userId},{company,position,status},{returnDocument:'after',runValidators:true}).select('-createdBy');
    if(!job){
        throw notFoundErr('Job not found.');
    }
    res.status(StatusCodes.OK).json({success:true,data:job});
}

const deleteJob=async(req,res)=>{
    const{userId}=req.jwtPayload;
    const{jobId}=req.params;
    const job=await jobsModel.findOneAndDelete({_id:jobId,createdBy:userId}).select('-createdBy');
    if(!job){
        throw notFoundErr('Job not found.');
    }
    res.status(StatusCodes.OK).json({success:true,data:job});
}

module.exports={
    getJobsList,
    getSingleJob,
    postJob,
    updateJob,
    deleteJob
};

