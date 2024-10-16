const mongoose =require("mongoose");

const {PositionSchema}= require("../schema/PositionSchema");

const PositionModel=mongoose.model("position",PositionSchema);


module.exports={
    PositionModel
}