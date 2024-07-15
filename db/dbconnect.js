const mongoose=require('mongoose');

async function connectToDB(uri){
    return await mongoose.connect(uri);
}

module.exports=connectToDB;