const mongoose=require('mongoose');

const jobDocumentSchema=new mongoose.Schema({
    company:{
        type:String,
        required:[true,'Must provide company name.'],
        trim:true
    },
    position:{
        type:String,
        required:[true,'Must provide position.'],
        trim:true
    },
    status:{
        type:String,
        enum:{
            values:['pending','interview','declined'],
            message:'{VALUE} is invalid, kindly provide valid status.'
        },
        default:'pending',
        trim:true
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        required:[true,'Must provide user.'],
        ref:'users',
        trim:true
    }
},{
    timestamps:true
});

const jobsModel=mongoose.model('jobs',jobDocumentSchema);

module.exports=jobsModel;