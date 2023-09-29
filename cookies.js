const express = require("express");
const app = express()
const cookies = require("cookie-parser")

app.use(cookies());
let users = 
{
    name:"john",
    age:27,
}
app.get("/",(req,res)=>
{
    res.send("cookies tutorial");
});

app.get("/setuser",(req,res)=>
{
    res.cookie("userdata",users);
    res.send("user data added to cookies")
})
app.get("/getuser",(req,res)=>
{
    res.send(req.cookies);
})
app.get("/logout",(req,res)=>
{
    res.clearCookie("userData");
    res.send("user logg out successfully")
})
const PORT = process.env.PORT||3001;
app.listen(PORT,()=>console.log(`server is running${PORT}`));