var schema1=require("./Schemas/Data1") // importing schema
var express=require("express");  // import express js
var conn=require("./connection"); //connection establish
const mongoose = require("mongoose");
var app=express();
var Data=new schema1.Modal({email:"ali123mazhar@gmail.com",Name:"butt"})
conn.on("connected",function(){console.log("Connection established successfully");})
conn.on("disconnected",function(){console.log("Connection disconnected successfully");})
conn.on("error",function(){console.log("Some error occur ");})
conn.on("open",async function(){
console.log("connection open");
//Write Operation
//Data.save().then(()=>{console.log("data sent successfully")}).catch((err)=>{console.log(err);});

//Read Operation
//const findResult = await schema1.Modal.find();
//for await (const doc of findResult) {
//  console.log(doc);
// }

//Delete Operation
// const deleteResult=await schema1.Modal.deleteOne({Name:"butt"});
// console.log(deleteResult);

//Update Operation
const query = {email:"ali123mazhar@gmail.com"};
const update = { $set: {Name:"ww"}};
const options = { upsert: false };
const UpdateResult=await schema1.Modal.updateOne(query, update,options);
console.log(UpdateResult);
})
app.listen(8080,()=>console.log("server is running on port"));