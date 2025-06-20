const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// Add a book
router.post("/", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json({ message: "Book added", book });
  } catch (err) {
    res.status(500).json({ error: "Failed to add book." });
  }
});

// Get all books
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Get featured (mock logic — update as needed)
router.get("/featured", async (req, res) => {
  const books = await Book.find().limit(3);
  res.json(books);
});

// Get book by ID
router.get("/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.json(book);
});

// Add review to a book
router.post("/:id/reviews", async (req, res) => {
  const { rating, text } = req.body;
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    book.reviews.push({ rating, text });
    await book.save();

    res.status(201).json({ message: "Review added" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add review" });
  }
});

// Get all reviews
router.get("/all/reviews", async (req, res) => {
  const books = await Book.find({}, "title reviews");
  const all = books.flatMap(b =>
    b.reviews.map(r => ({ bookTitle: b.title, rating: r.rating, text: r.text }))
  );
  res.json(all);
});

module.exports = router;
