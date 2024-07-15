const{CustomError}=require('./customError');
const{StatusCodes}=require('http-status-codes');

class UnauthError extends CustomError{
    constructor(message){
        super(message);
        this.statusCode=StatusCodes.UNAUTHORIZED;
    }
}

function unauthErr(msg){
    return new UnauthError(msg);
}

module.exports={
    UnauthError,
    unauthErr
}
