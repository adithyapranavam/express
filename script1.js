// const interval = setInterval(() =>
// {
//    console.log("running");

// }, 1000);
// setTimeout(()=>
// {
//   clearInterval(interval);
// },3000)
// const path = require("path");
// const fs = require("fs");
// console.log(path.basename(__filename));
//    console.log(path.extname(__filename));
// console.log(path.dirname(__filename));
// console.log(path.parse(__filename));
// console.log(path.join(__dirname,"api","script1.js"));
// console.log(__filename);
// fs.mkdir(path.join(__dirname,"/api") ,{},(error)=>
// const username = "adithya"
// // fs.writeFile(path.join(__dirname,"/api","api.txt") ,`user name:${username}`,(error)=>
// // fs.appendFile(path.join(__dirname,"/api","api.txt") ,`\n user name:${username}`,(error)=>
// fs.readFile(path.join(__dirname,"/api","api.txt") ,"utf8",(error,data)=>
// {
//     // if(error)throw error;
//     console.log(data)

// })
// const Eventemitter = require("events");
// const emitter = new Eventemitter();
// emitter.on("message",(data)=>
// {
//     console.log(data.text);
// });
// emitter.on("message 2",(data)=>
// {
//     console.log(data.text)
// })
//  emitter.emit("message",{text:"succusfully loggined"})

// emitter.emit("message 2",{text:"looged out"});
// const http = require("http");
// const path = require("path");
// const fs = require("fs")
// const server = http.createServer((req,res)=>
// {
//     if(req.url ==="/")
//     {
//         fs.readFile(path.join(__dirname,"view","index.html"),"utf8",(err,data)=>
//         {
//          if(err)throw err;
//          res.writeHead(200,{"content-type":"text/html"});
//          res.end(data);
//         });
//     }
//     if(req.url === "/contact")
//     {
//         fs.readFile(path.join(__dirname,"view","contact.html"),"utf8",(err,data)=>
//         {
//          if(err)throw err;
//          res.writeHead(200,{"content-type":"text/html"});
//          res.end(data);
//         });
//     }
  
// });
// const PORT = process.env.PORT||3005;
// server.listen(PORT,()=>console.log(`server is running ${PORT}`));

const {logger,myName} = require("./util");

 console.log(logger());
 console.log(myName);