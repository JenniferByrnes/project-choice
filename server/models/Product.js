const mongoose = require("mongoose");
const { Schema } = mongoose;

//create the Products model using the
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
  size: {
    type: String,
  },
  colors: [],
  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
});

// export the Products models
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
