const mongoose = require('mongoose');
const istTime = (5.5 * 60 * 60 * 1000);

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please fill the field']
    },
    firstname: {
        type: String,
        required: false,
    },
    lastname: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: [true, 'please fill the field']
    },
    mobile: {
        type: Number,
        required: false,
    },
    password: {
        type: String,
        required: [true, 'please fill the field']
    },
    joinedOn: {
        type: Date,
        default: Date.now() + istTime
    },
    role: {
        type: String,
        default: 'user'
    },
    forgetPassword: {
        time: Date,
        otp: String
    },
    token: {
        type: String,
        required: [true, 'please enter the token']
    },

    doorno: {
        type: String,
        required: false,
    },
    street: {
        type: String,
        required: false,
    },
    landmark: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false,
    },
    district: {
        type: String,
        required: false,
    },
    state: {
        type: String,
        required: false,
    },
    pincode: {
        type: String,
        required: false,
    },
    country: {
        type: String,
        required: false,
    },

})

const User = mongoose.model('User', userSchema);

module.exports = User;