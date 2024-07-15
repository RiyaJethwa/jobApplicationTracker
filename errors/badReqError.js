const{CustomError}=require('./customError');
const{StatusCodes}=require('http-status-codes');

class BadReqError extends CustomError{
    constructor(message){
        super(message);
        this.statusCode=StatusCodes.BAD_REQUEST;
    }
}

function badReqErr(msg){
    return new BadReqError(msg);
}

module.exports={
    BadReqError,
    badReqErr
}
