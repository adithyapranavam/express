const express = require("express");
const app = express();

const getReady = function(req,res,next)
{
    console.log("logged");
    next();
}
const  reqReady= function(req,res,next)
{
    req.reqTime = Date.now();
    next();
}

app.use(getReady);
app.use(reqReady);


app.get("/",(req,res)=>
{
    res.send(`currentTime:${req.reqTime}`)
});

const PORT = process.env.PORT||3006;
app.listen(PORT,()=>console.log(`server is running ${PORT}`)); 