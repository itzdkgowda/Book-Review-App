import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!book) return <p className="p-6">Loading book details...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
      <p className="text-lg text-gray-700">Author: {book.author}</p>
      {book.genre && <p className="text-gray-600">Genre: {book.genre}</p>}
      {book.publishedYear && <p className="text-gray-600">Published: {book.publishedYear}</p>}
      <h3 className="text-xl font-semibold mt-6 mb-2">Reviews</h3>
      {book.reviews?.length ? (
        <ul className="space-y-3">
          {book.reviews.map((r, i) => (
            <li key={i} className="bg-gray-100 p-4 rounded">
              <strong>Rating:</strong> {r.rating || "N/A"} ★<br />
              <em>{r.text}</em>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No reviews yet.</p>
      )}
    </div>
  );
};

export default BookDetails;
