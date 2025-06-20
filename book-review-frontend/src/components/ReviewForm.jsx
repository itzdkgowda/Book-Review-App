import { useState } from "react";
import axios from "axios";

const ReviewForm = ({ bookId }) => {
  const [review, setReview] = useState({ rating: "", text: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!bookId) {
      setMessage("❌ Book ID is missing.");
      return;
    }

    try {
      await axios.post(`http://localhost:5000/books/${bookId}/reviews`, review);
      setMessage("✅ Review submitted!");
      setReview({ rating: "", text: "" });
    } catch (err) {
      setMessage("❌ Failed to submit review.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 p-5 rounded-lg mt-6 text-white">
      <h3 className="text-xl font-semibold mb-3">⭐ Leave a Review</h3>
      <select
        name="rating"
        value={review.rating}
        onChange={handleChange}
        required
        className="w-full p-2 rounded bg-white/20 mb-3"
      >
        <option value="">Rating</option>
        {[5, 4, 3, 2, 1].map(n => (
          <option key={n} value={n}>{n} ★</option>
        ))}
      </select>
      <textarea
        name="text"
        value={review.text}
        onChange={handleChange}
        placeholder="Write your review..."
        rows="4"
        required
        className="w-full p-3 rounded bg-white/20"
      />
      <button className="mt-3 bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700">Submit Review</button>
      {message && <p className="mt-2">{message}</p>}
    </form>
  );
};

export default ReviewForm;
