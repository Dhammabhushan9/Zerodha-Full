const mongoose= require('mongoose')

const {HoldingSchema}= require('../schema/HoldingSchema');
 

const HoldingModel =mongoose.model("holding",HoldingSchema);

module.exports={
    HoldingModel
}