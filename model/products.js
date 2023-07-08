const mongoose = require("mongoose");

// Schema

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: { type: Number },
  discountPercentage: { type: Number },
  rating: { type: Number, default: 0 },
  brand: { type: String },
  category: { type: String },
  thumbnail: { type: String },
  images: [String],
});

// model

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
