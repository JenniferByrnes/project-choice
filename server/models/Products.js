const { Schema, model } = require("mongoose");

const Products = new Schema({
  productCategory: {
    type: String,
  },
  productPrice: {
    type: Integral,
  },
  size: {
    type: String,
    default: "Large",
  },
  colors: [],
});

module.exports = Products;
