const{customErr}=require('./customError');
const{badReqErr}=require('./badReqError');
const{notFoundErr}=require('./notFoundError');
const{unauthErr}=require('./unauthError');

module.exports={
    customErr,
    badReqErr,
    notFoundErr,
    unauthErr
};