const express = require("express");
const app = express();

const data = 
{
    id:22,
    name:"sasi"
}


app.get("/",(req,res)=>
{
    res.send("this is home page")
})
app.get("/about",(req,res)=>
{
    res.send("this is about page")
})
app.get("/contact",(req,res)=>
{
    res.json(data)
})

const PORT = process.env.PORT||3002;
app.listen(PORT,()=>console.log(`server is running ${PORT}`))