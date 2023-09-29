
const express = require("express");
const app = express();

app.use(express.static("views"))

const token = "123";
app.get("/profile",Token,(req,res)=>
{
    res.status(404).send("<h1>404 error<h1>");//chaining

});

 const PORT = process.env.PORT||3001
app.listen(PORT,()=>console.log(`server is running ${PORT}`));
