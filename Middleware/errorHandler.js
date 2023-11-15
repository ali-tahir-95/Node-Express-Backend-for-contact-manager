const { constants } = require("../Data/constants");

errorHandler=(err,req,res,next)=>{
const statusCode=req.statusCode?req.statusCode:500;

switch (statusCode) {
    case constants.VALIDATION_ERROR:
        res.json({title:"Validation_Error",message:err.message,stackTrace:err.stack});
        break;
        case constants.UNAUTHORIZED:
        res.json({title:"Unauthorized",message:err.message,stackTrace:err.stack});
        break;case constants.NOT_FOUND:
        res.json({title:"Not_Found",message:err.message,stackTrace:err.stack});
        break;case constants.FORBIDDEN:
        res.json({title:"Forbidden",message:err.message,stackTrace:err.stack});
        break;case constants.SERVER_ERROR:
        res.json({title:"Server_error",message:err.message,stackTrace:err.stack});
        break;

    default:
        break;
}


}
module.exports= errorHandler;