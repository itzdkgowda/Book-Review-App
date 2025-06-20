const express = require("express");
const { getBooks, getBookById, addBook } = require("../controllers/bookController");
const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/", addBook);

module.exports = router;
