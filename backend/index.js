const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const authRoutes = require('./routes/authroute');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');
const paymentRoutes = require("./routes/payment");

const connectDB=require('./db')
const signInRoutes = require('./routes/signin');
const loginRoutes = require('./routes/login');

app.use(express.json());
app.use(cors());

connectDB();

app.use('/signin',signInRoutes);
app.use('/login',loginRoutes);
app.use('/auth',authRoutes);
app.use('/master',productRoutes);
app.use('/cart',cartRoutes);
app.use('/checkout',orderRoutes);
app.use("/api/payment/", paymentRoutes);

//for running frontend in here
app.use(express.static((path.join(__dirname,'../frontend/build'))));
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'../frontend/build/index.html'))
})


const server = app.listen(process.env.port,()=>{
  console.log(`server running on the port ${process.env.port}`);
})

process.on('unhandledRejection',(err)=>{
  console.log(`Error: ${err.message}`);
  console.log('shutting down the server due to unhandled rejection');
  server.close(()=>{
      process.exit(1);
  })
})

process.on('uncaughtException',(err)=>{
  console.log(`Error: ${err.message}`);
  console.log('shutting down the server due to uncaughtexception error');
  server.close(()=>{
      process.exit(1);
  })
})
