const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// Add a new book
router.post("/", async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: "Failed to add book" });
  }
});

// Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

// Get a specific book by ID
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch book" });
  }
});

// Add a review to a book
router.post("/:id/reviews", async (req, res) => {
  const { rating, text } = req.body;
  if (!rating || !text) {
    return res.status(400).json({ error: "Rating and text are required" });
  }

  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    book.reviews.push({ rating, text });
    await book.save();

    res.status(201).json({ message: "Review added" });
  } catch (err) {
    console.error("Review error:", err);
    res.status(500).json({ error: "Failed to add review" });
  }
});

// Get all reviews from all books
router.get("/all/reviews", async (req, res) => {
  try {
    const books = await Book.find({}, "title reviews");
    const reviews = books.flatMap(book =>
      book.reviews.map(r => ({
        bookTitle: book.title,
        rating: r.rating,
        text: r.text
      }))
    );
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

module.exports = router;
