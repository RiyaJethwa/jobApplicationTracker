const validateString=(str)=>{
    return typeof str==='string' && str!=='';
}

module.exports={
    validateString
}