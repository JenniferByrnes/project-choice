const { Schema } = require("mongoose");

//create the Products model using the
const productSchema = new Schema({
  productCategory: {
    type: String,
  },
  productPrice: {
    type: Integral,
  },
  size: {
    type: String,
  },
  colors: [],
});

// export the Products models
module.exports = productSchema;
