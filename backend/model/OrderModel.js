const mongoose= reqiure('mongoose');

const {OrderSchema}= require("../schema/OrderSchema");

const OrderModel=mongoose.model("order",OrderSchema);

module.exports={
    OrderModel
}