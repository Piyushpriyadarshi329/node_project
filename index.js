//   module ==> core module, third party module, local module

// fs os path http

// const http = require("http");


const { request } = require("express")
const express= require("express")

const mysql= require("mysql")

// http
//   .createServer((request, response) => {
//     console.log("req", request.url, request);

//     if (request.url == "/home") {
//       response.write("hello world this is home page");
//       response.end();
//     } else if (request.url == "/about") {
//       response.write("hello world this is about page");
//       response.end();
//     } else {
//       response.write("hello world testt");
//       response.end();
//     }
//   })
//   .listen(4000);

// console.log("server is listening on 4000 port");


const con=mysql.createConnection({
    host: "127.0.0.1"  ,
     user:"root",
     password:"Piyush@329",
     database:"test"
})

con.connect(function(err) {
    if (err){
console.log(err)
    }else{

        console.log("Connected!");
    }
  });



const app= express()


app.post("/",(request,response)=>{



    response.send("hello world from express")
})


app.get("/student",(request,response)=>{

  con.query("SELECT * FROM student",(err,result)=>{

    if(err){
        response.send(JSON.stringify(err))


    }else{


        response.send(result)
    }


  })

})

app.listen(4000)