var mongoose=require("mongoose"); // importing mongodb
mongoose.connect("mongodb+srv://MuhammadAli:904d13ba@cluster0.cqoffzs.mongodb.net/?retryWrites=true&w=majority",
{useNewUrlParser:true}).then(()=>{
        console.log("connection is correct")
    }).catch((err)=>{
        console.log(err);
    });
var conn=mongoose.connection;
module.exports=conn;