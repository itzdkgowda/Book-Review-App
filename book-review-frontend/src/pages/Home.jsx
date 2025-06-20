import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books/featured")
      .then(res => setFeatured(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 text-white">
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Books That Matter</h1>
        <p className="text-lg text-slate-300 max-w-xl mx-auto mb-6">
          Browse and review your favorite titles. Read, rate, and connect with other readers.
        </p>
        <a href="/books" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-full font-medium shadow-lg transition">
          Start Exploring
        </a>
      </section>

      <section className="px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">📚 Featured Reads</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {featured.length ? featured.map(book => (
            <div key={book._id} className="bg-white/10 p-5 rounded-xl shadow-md hover:scale-105 transition">
              <h3 className="text-xl font-bold">{book.title}</h3>
              <p className="text-slate-300">by {book.author}</p>
              {book.genre && <span className="text-xs bg-indigo-700 px-3 py-1 rounded-full inline-block mt-2">{book.genre}</span>}
            </div>
          )) : <p className="col-span-full text-slate-400">No featured books available.</p>}
        </div>
      </section>
    </div>
  );
};

export default Home;
