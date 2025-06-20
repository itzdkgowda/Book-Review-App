import { useState } from "react";
import axios from "axios";

const AddReview = () => {
  const [review, setReview] = useState({ bookId: "", rating: "", text: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/books/${review.bookId}/reviews`, {
        rating: review.rating,
        text: review.text
      });
      setMessage("✅ Review submitted!");
      setReview({ bookId: "", rating: "", text: "" });
    } catch (err) {
      setMessage("❌ Failed to submit review.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 p-6 rounded-xl text-white max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">⭐ Submit a Review</h2>
      <input
        name="bookId"
        placeholder="Book ID"
        value={review.bookId}
        onChange={handleChange}
        className="w-full mb-3 p-2 rounded bg-white/20 placeholder-white"
        required
      />
      <select
        name="rating"
        value={review.rating}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 rounded bg-white/20 text-white"
      >
        <option value="">Rating</option>
        {[5, 4, 3, 2, 1].map(r => (
          <option key={r} value={r}>{r} ★</option>
        ))}
      </select>
      <textarea
        name="text"
        placeholder="Write your review..."
        value={review.text}
        onChange={handleChange}
        rows="4"
        className="w-full p-2 rounded bg-white/20 placeholder-white mb-3"
        required
      />
      <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-white font-medium">
        Submit Review
      </button>
      {message && <p className="mt-3">{message}</p>}
    </form>
  );
};

export default AddReview;
