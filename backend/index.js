const express= require("express");
const mongoose= require("mongoose");
const app= express();

async function con(){
    try{
        await mongoose.connect("mongodb+srv://cob56dhammabhushanwaghmare:omtNTxv1bOtWqTmD@cluster0.jtu0y.mongodb.net/zerodha");
        console.log("connection succesfull")
    } catch(err){
        console.log(err)
    }
} 
con();



app.listen(3030,()=>{
    console.log("hi there port is listing")
})