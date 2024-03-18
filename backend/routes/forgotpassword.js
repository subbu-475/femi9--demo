const express = require('express');
const route = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const dotenv = require('dotenv');
dotenv.config();


route.route('/forgotpassoword').post(async(req,res)=>{
    const {email}=req.body;
    const userAvailable = await User.findOne({email:email});
    if(userAvailable){
        const token = jwt.sign(email,process.env.jwtforgot_token)
        const activationLink=`http://localhost:8000/resetpassword/${token}`
        const content = `<h4>Hi,there</h4>
        <p>Plese click the below link to verify</p>
        <a href=${activationLink}>click here</a>
        <p>regard</p>
        <p>team</p>`
    }
    else{
        res.send('user not available');
    }
})

