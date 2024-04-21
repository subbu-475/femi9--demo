const mongoose = require('mongoose');
const dotenv=require('dotenv');

dotenv.config();

const connectDB=async ()=>{
    try{
        await mongoose.connect("mongodb+srv://personalcse475:Subbucse475@cluster0.1aikfy0.mongodb.net/femi");
        console.log("data base connected successfully");
    }
    catch(err){
        console.log(err);
    }
    
}

module.exports = connectDB;
