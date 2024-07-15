const { CustomError } = require("./customError");
const{StatusCodes}=require('http-status-codes');

class NotFoundError extends CustomError{
    constructor(message){
        super(message);
        this.statusCode=StatusCodes.NOT_FOUND;
    }
}

function notFoundErr(msg){
    return new NotFoundError(msg);
}

module.exports={
    NotFoundError,
    notFoundErr
};