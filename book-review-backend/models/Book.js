const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  rating: Number,
  text: String
});

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  publishedYear: Number,
  reviews: [reviewSchema]
});

module.exports = mongoose.model("Book", bookSchema);
