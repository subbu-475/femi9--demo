const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
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
  oldprice: {
    type: Number,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
