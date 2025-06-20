// // import { useState } from "react";
// // import axios from "axios";

// // const AddReview = () => {
// //   const [review, setReview] = useState({ bookId: "", rating: "", text: "" });
// //   const [message, setMessage] = useState("");

// //   const handleChange = (e) => {
// //     setReview({ ...review, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post(`http://localhost:5000/books/${review.bookId}/reviews`, {
// //         rating: review.rating,
// //         text: review.text
// //       });
// //       setMessage("✅ Review submitted!");
// //       setReview({ bookId: "", rating: "", text: "" });
// //     } catch (err) {
// //       setMessage("❌ Failed to submit review.");
// //       console.error(err);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="bg-white/10 p-6 rounded-xl text-white max-w-xl mx-auto mt-10">
// //       <h2 className="text-2xl font-bold mb-4">⭐ Submit a Review</h2>
// //       <input
// //         name="bookId"
// //         placeholder="Book ID"
// //         value={review.bookId}
// //         onChange={handleChange}
// //         className="w-full mb-3 p-2 rounded bg-white/20 placeholder-white"
// //         required
// //       />
// //       <select
// //         name="rating"
// //         value={review.rating}
// //         onChange={handleChange}
// //         required
// //         className="w-full mb-3 p-2 rounded bg-white/20 text-white"
// //       >
// //         <option value="">Rating</option>
// //         {[5, 4, 3, 2, 1].map(r => (
// //           <option key={r} value={r}>{r} ★</option>
// //         ))}
// //       </select>
// //       <textarea
// //         name="text"
// //         placeholder="Write your review..."
// //         value={review.text}
// //         onChange={handleChange}
// //         rows="4"
// //         className="w-full p-2 rounded bg-white/20 placeholder-white mb-3"
// //         required
// //       />
// //       <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-white font-medium">
// //         Submit Review
// //       </button>
// //       {message && <p className="mt-3">{message}</p>}
// //     </form>
// //   );
// // };

// // export default AddReview;

// import { useState } from "react";
// import axios from "axios";

// const AddReview = () => {
//   const [review, setReview] = useState({ bookId: "", rating: "", text: "" });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setReview({ ...review, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`http://localhost:5000/books/${review.bookId}/reviews`, {
//         rating: review.rating,
//         text: review.text
//       });
//       setMessage("✅ Review submitted!");
//       setReview({ bookId: "", rating: "", text: "" });
//     } catch (err) {
//       setMessage("❌ Failed to submit review.");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-900 text-white p-6">
//       <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white/10 p-6 rounded-xl shadow-lg border border-white/20">
//         <h2 className="text-2xl font-bold mb-4">✍️ Submit a Review</h2>
//         <input
//           name="bookId"
//           value={review.bookId}
//           onChange={handleChange}
//           placeholder="Book ID"
//           required
//           className="w-full p-3 rounded mb-3 bg-white/10 placeholder-gray-400"
//         />
//         <select
//           name="rating"
//           value={review.rating}
//           onChange={handleChange}
//           required
//           className="w-full p-3 rounded mb-3 bg-white/10"
//         >
//           <option value="">Rating</option>
//           {[5, 4, 3, 2, 1].map(r => (
//             <option key={r} value={r}>{r} ★</option>
//           ))}
//         </select>
//         <textarea
//           name="text"
//           value={review.text}
//           onChange={handleChange}
//           placeholder="Write your review..."
//           rows="4"
//           required
//           className="w-full p-3 rounded mb-3 bg-white/10 placeholder-gray-400"
//         />
//         <button type="submit" className="bg-indigo-600 px-5 py-2 rounded hover:bg-indigo-700 transition">
//           Submit Review
//         </button>
//         {message && <p className="mt-3 text-sm">{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default AddReview;



import { useEffect, useState } from "react";
import axios from "axios";

const AddReview = () => {
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState("");
  const [review, setReview] = useState({ rating: "", text: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/books")
      .then(res => setBooks(res.data))
      .catch(console.error);
  }, []);

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedBookId) {
      setMessage("❌ Please select a book.");
      return;
    }

    try {
      await axios.post(`http://localhost:5000/books/${selectedBookId}/reviews`, review);
      setMessage("✅ Review submitted!");
      setReview({ rating: "", text: "" });
      setSelectedBookId("");
    } catch (err) {
      setMessage("❌ Failed to submit review.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white/10 p-6 rounded-xl shadow-lg border border-white/20">
        <h2 className="text-2xl font-bold mb-4">✍️ Submit a Review</h2>

        <select
          value={selectedBookId}
          onChange={(e) => setSelectedBookId(e.target.value)}
          required
          className="w-full p-3 rounded mb-3 bg-white/10 text-white"
        >
          <option value="">Select a Book</option>
          {books.map(book => (
            <option key={book._id} value={book._id}>
              {book.title} — {book.author}
            </option>
          ))}
        </select>

        <select
          name="rating"
          value={review.rating}
          onChange={handleChange}
          required
          className="w-full p-3 rounded mb-3 bg-white/10 text-white"
        >
          <option value="">Rating</option>
          {[5, 4, 3, 2, 1].map(r => (
            <option key={r} value={r}>{r} ★</option>
          ))}
        </select>

        <textarea
          name="text"
          value={review.text}
          onChange={handleChange}
          placeholder="Write your review..."
          rows="4"
          required
          className="w-full p-3 rounded mb-3 bg-white/10 placeholder-gray-400"
        />

        <button type="submit" className="bg-indigo-600 px-5 py-2 rounded hover:bg-indigo-700 transition">
          Submit Review
        </button>

        {message && <p className="mt-3 text-sm">{message}</p>}
      </form>
    </div>
  );
};

export default AddReview;
