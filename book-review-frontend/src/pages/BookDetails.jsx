// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const BookDetails = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/books/${id}`)
//       .then(res => setBook(res.data))
//       .catch(console.error);
//   }, [id]);

//   if (!book) return <p className="text-white p-6">Loading book...</p>;

//   return (
//     <div className="min-h-screen bg-slate-900 text-white p-6">
//       <div className="max-w-3xl mx-auto bg-white/10 p-8 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
//         <p className="mb-1 text-indigo-300">Author: {book.author}</p>
//         {book.genre && <p className="text-sm text-slate-300">Genre: {book.genre}</p>}
//         {book.publishedYear && <p className="text-sm text-slate-300">Published: {book.publishedYear}</p>}

//         <div className="mt-6">
//           <h3 className="text-xl font-semibold mb-2">Reviews</h3>
//           {book.reviews?.length ? (
//             <ul className="space-y-3">
//               {book.reviews.map((r, i) => (
//                 <li key={i} className="bg-white/10 p-3 rounded">
//                   <p><strong>{r.rating} ★</strong></p>
//                   <p className="italic">{r.text}</p>
//                 </li>
//               ))}
//             </ul>
//           ) : <p className="text-slate-400">No reviews yet.</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`)
      .then(res => setBook(res.data))
      .catch(console.error);
  }, [id]);

  if (!book) return <p className="text-white p-6">Loading book details...</p>;

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-3xl mx-auto bg-white/10 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
        <p className="mb-1 text-indigo-300">Author: {book.author}</p>
        {book.genre && <p className="text-sm text-slate-300">Genre: {book.genre}</p>}
        {book.publishedYear && <p className="text-sm text-slate-300">Published: {book.publishedYear}</p>}

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Reviews</h3>
          {book.reviews?.length ? (
            <ul className="space-y-3">
              {book.reviews.map((r, i) => (
                <li key={i} className="bg-white/10 p-3 rounded">
                  <p><strong>{r.rating} ★</strong></p>
                  <p className="italic">{r.text}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-400">No reviews yet.</p>
          )}
        </div>

        <ReviewForm bookId={book._id} />
      </div>
    </div>
  );
};

export default BookDetails;
