// document.querySelector(".utube").addEventListener("click",function(){
//   alert("Redirects to YouTube");
// });
//jshint esversion:6
const express=require("express");
// const bodyparser=require("body-parser");


const app=express();
app.use(express.static("public"));
// app.use(bodyparser.urlencoded({extended:true}));


app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html")
})

app.post("/",function(req,res){
  res.sendFile(__dirname + "/moreproducts.html");
})

app.listen(process.env.PORT || 3000,function(){
  console.log("working on port 3000.");
})
