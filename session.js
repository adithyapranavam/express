const express = require("express");
const app = express();
const session = require("express-session");

app.use(session({
    secret: 'your secret key',
    resave: true,
    saveUninitialized: true,
  }));

app.get("/",(req,res)=>
{
   req.session.name="john";
   return res.send("session set"); 
})
app.get("/session",(req,res)=>
{
      var name = req.session.name; 
      return res.send(name);
})
app.get("/destroy",(req,res)=>
{
  req.session.destroy(function(error)
  {
     console.log("session destroyed");
  })
  res.end();
})

const PORT = process.env.PORT||3001;
app.listen(PORT,()=>console.log(`server is running ${PORT}`));