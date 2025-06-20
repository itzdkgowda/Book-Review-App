import { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    publishedYear: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/books", book);
      setMessage("✅ Book added successfully!");
      setBook({ title: "", author: "", genre: "", publishedYear: "" });
    } catch (err) {
      setMessage("❌ Failed to add book.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 p-6 rounded-xl text-white max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">📘 Add a New Book</h2>
      {["title", "author", "genre", "publishedYear"].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={book[field]}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-white/20 placeholder-white"
          required
        />
      ))}
      <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-white font-medium">
        Add Book
      </button>
      {message && <p className="mt-3">{message}</p>}
    </form>
  );
};

export default AddBook;
