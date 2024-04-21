const mongoose = require("mongoose");
const istTime = (5.5 * 60 * 60 * 1000);
const OrderSchema = mongoose.Schema({

    clientname: {
        type: String,
        required: false,
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
        required: false,
    },
    mobile: {
        type: Number,
        required: false,
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


    razorpaypaymentid: {
        type: String,
        required: false,
    },
    // for products
    productname: {
        type: String,
        required: false,
    },

    userid: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        required: false,
    },
    size: {
        type: String,
        required: false,
    },
    vendor: {
        type: String,
        required: false,
    },
    quantity: {
        type: Number,
        required: false,
    },
    productid: {
        type: String,
        required: false,
    },
    totalprice: {
        type: Number,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now() + istTime,
    },
    available: {
        type: Boolean,
        default: true,
    },
});

module.exports = mongoose.model("order", OrderSchema);
