// const express = require("express");
// const { getBooks, getBookById, addBook } = require("../controllers/bookController");
// const router = express.Router();

// router.get("/", getBooks);
// router.get("/:id", getBookById);
// router.post("/", addBook);

// module.exports = router;

// routes/books.js
router.get("/all/reviews", async (req, res) => {
  try {
    const books = await Book.find({}, "title reviews");
    const allReviews = books.flatMap(book =>
      book.reviews.map(r => ({
        bookTitle: book.title,
        rating: r.rating,
        text: r.text
      }))
    );
    res.json(allReviews);
  } catch (err) {
    console.error("Error fetching reviews:", err);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});
