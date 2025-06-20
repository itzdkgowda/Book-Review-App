const Book = require("../models/Book");

const getBooks = async (req, res) => {
  const books = await Book.find().populate("reviews");
  res.json(books);
};

const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id).populate("reviews");
  res.json(book);
};

const addBook = async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.json(newBook);
};

module.exports = { getBooks, getBookById, addBook };

