const mongoose = require("mongoose");
const istTime = (5.5 * 60 * 60 * 1000);
const CartSchema = mongoose.Schema({
  name: {
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
  newprice: {
    type: Number,
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
    default: Date.now ()+istTime,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("cart", CartSchema);
