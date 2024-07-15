class CustomError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
    }
}

function customErr(msg,status){
    return new CustomError(msg,status);
}

module.exports={
    CustomError,
    customErr
}