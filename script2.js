const express = require("express");
const app = express();



const  Token = require("./middleware/token")
const  Validation = require("./middleware/validation");
// const token = "123";

app.use(dateGenerator);
const middleware = [Token,Validation];
app.get("/profile",middleware,(req,res)=>
{
    console.log("user logged...")
    res.send("<h1>success</h1>");
});
app.get("/",(req,res)=>
{
    console.log("default url")
    res.send("<h1>home</h1>");
});
function dateGenerator(req,res,next)
{
    console.log(new Date());
    next();
}
// function Token(req,res,next)
// {
//     console.log("creating token")

//     // setInterval(()=> 
//     // {
//     //     const TOKEN  = "123";
//     //     req.token = Token;
//     //     next();
//     // },2000); 
//     req.token = true;
//     next();
// }
// function validation(req,res,next)
// {
//     console.log("start")
// if(req.token)
// {
//     console.log("token approved")
//     next();
//     return;
    
// }
//      console.log("end")
// }

 const PORT = process.env.PORT||3001
app.listen(PORT,()=>console.log(`server is running ${PORT}`));
