const Review = require("../models/Review");

const addReview = async (req, res) => {
  const newReview = new Review(req.body);
  await newReview.save();
  res.json(newReview);
};

module.exports = { addReview };
