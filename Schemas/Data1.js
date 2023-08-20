var mongoose=require("mongoose"); // importing mongodb
let TableStructure=new mongoose.Schema(
    {
        email:String,
        Name:String
    }
);
var Modal=mongoose.model("TableName",TableStructure);

module.exports={Modal} ;