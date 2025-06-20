// // import { useEffect, useState } from "react";
// // import axios from "axios";

// // const Profile = () => {
// //   const [reviews, setReviews] = useState([]);

// //   useEffect(() => {
// //         axios.get("http://localhost:5000/api/reviews")
// //       .then(res => setReviews(res.data))
// //       .catch(console.error);
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-slate-900 text-white p-6">
// //       <div className="max-w-3xl mx-auto bg-white/10 p-8 rounded-lg shadow-md border border-white/20">
// //         <h2 className="text-3xl font-bold mb-2">📖 Community Reviews</h2>
// //         <p className="text-sm text-slate-300 mb-4">Books shared and reviewed by our awesome readers.</p>

// //         {reviews.length ? (
// //           <ul className="space-y-4">
// //             {reviews.map((r, i) => (
// //               <li key={i} className="bg-white/10 p-4 rounded">
// //                 <p className="text-indigo-300">Book: {r.bookTitle}</p>
// //                 <p>Rating: {r.rating} ★</p>
// //                 <p className="italic">{r.text}</p>
// //               </li>
// //             ))}
// //           </ul>
// //         ) : (
// //           <p className="text-slate-400">No reviews yet. Be the first to share your thoughts!</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;

// import { useEffect, useState } from "react";
// import axios from "axios";

// const Profile = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/reviews")
//       .then(res => setReviews(res.data))
//       .catch(console.error);
//   }, []);

//   return (
//     <div className="min-h-screen bg-slate-900 text-white p-6">
//       <div className="max-w-3xl mx-auto bg-white/10 p-8 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold mb-2">📢 Community Reviews</h2>
//         <p className="text-slate-300 mb-4 text-sm">Thoughts shared by fellow readers.</p>
//         {reviews.length ? (
//           <ul className="space-y-4">
//             {reviews.map((r, i) => (
//               <li key={i} className="bg-white/10 p-4 rounded">
//                 <p className="text-indigo-300">Book: {r.bookTitle}</p>
//                 <p>Rating: {r.rating} ★</p>
//                 <p className="italic">{r.text}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-slate-400">No reviews yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/books/all/reviews")
      .then(res => {
        setReviews(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch reviews:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-3xl mx-auto bg-white/10 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">📢 Community Reviews</h2>
        {loading ? (
          <p className="text-slate-400">Loading reviews...</p>
        ) : reviews.length ? (
          <ul className="space-y-4">
            {reviews.map((r, i) => (
              <li key={i} className="bg-white/10 p-4 rounded border border-white/10">
                <p className="text-indigo-300 font-semibold">Book: {r.bookTitle}</p>
                <p className="text-yellow-400">Rating: {r.rating} ★</p>
                <p className="italic text-slate-200 mt-1">“{r.text}”</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-400">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
