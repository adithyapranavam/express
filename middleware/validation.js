function Validation(req,res,next)
{
if(req.token)
  {
    console.log("token approved")
    next();
    return;
    
  }
}
module.exports = Validation;