// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  title: String,
  description: String,
  price: String,
  image: String,
});

module.exports = mongoose.model("Product", productSchema);
