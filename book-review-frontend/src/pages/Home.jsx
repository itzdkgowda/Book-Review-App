import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books")
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">All Books</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {books.map(book => <BookCard key={book._id} book={book} />)}
      </div>
    </div>
  );
};

export default Home;
