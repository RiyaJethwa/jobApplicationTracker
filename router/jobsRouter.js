const express=require('express');
const jwtHandlerMiddleware=require('../middleware/jwtHandler');
const{getJobsList,getSingleJob,postJob,updateJob,deleteJob}=require('./controller/jobsController');

const router=express.Router();

router.use(jwtHandlerMiddleware);

router.route('/').get(getJobsList).post(postJob);
router.route('/:jobId').get(getSingleJob).patch(updateJob).delete(deleteJob);

module.exports=router;