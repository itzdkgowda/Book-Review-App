import { useEffect, useState } from "react";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("All");

  useEffect(() => {
    axios.get("http://localhost:5000/books")
      .then(res => setBooks(res.data))
      .catch(console.error);
  }, []);

  const filtered = books.filter(book =>
    (genre === "All" || book.genre === genre) &&
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  const genres = ["All", ...new Set(books.map(b => b.genre).filter(Boolean))];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Browse Books</h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by title"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 p-3 rounded bg-white/10 placeholder-gray-400"
          />
          <select value={genre} onChange={e => setGenre(e.target.value)} className="p-3 bg-white/10 rounded text-white">
            {genres.map(g => <option key={g}>{g}</option>)}
          </select>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {filtered.length ? filtered.map(book => (
            <div key={book._id} className="bg-white/10 p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg">{book.title}</h3>
              <p className="text-indigo-200 text-sm">by {book.author}</p>
              <a href={`/books/${book._id}`} className="text-indigo-400 underline mt-2 inline-block">Details</a>
            </div>
          )) : <p className="col-span-full text-slate-400">No books found.</p>}
        </div>
      </div>
    </div>
  );
};

export default Books;
