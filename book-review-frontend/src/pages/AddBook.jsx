// import { useState } from "react";
// import axios from "axios";

// const AddBook = () => {
//   const [book, setBook] = useState({
//     title: "",
//     author: "",
//     genre: "",
//     publishedYear: ""
//   });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setBook({ ...book, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/books", book);
//       setMessage("✅ Book added successfully!");
//       setBook({ title: "", author: "", genre: "", publishedYear: "" });
//     } catch (err) {
//       setMessage("❌ Failed to add book.");
//       console.error(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white/10 p-6 rounded-xl text-white max-w-xl mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-4">📘 Add a New Book</h2>
//       {["title", "author", "genre", "publishedYear"].map((field) => (
//         <input
//           key={field}
//           name={field}
//           placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//           value={book[field]}
//           onChange={handleChange}
//           className="w-full mb-3 p-2 rounded bg-white/20 placeholder-white"
//           required
//         />
//       ))}
//       <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-white font-medium">
//         Add Book
//       </button>
//       {message && <p className="mt-3">{message}</p>}
//     </form>
//   );
// };

// export default AddBook;


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
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white/10 p-6 rounded-xl shadow-lg border border-white/20">
        <h2 className="text-2xl font-bold mb-4">📘 Add a New Book</h2>
        {["title", "author", "genre", "publishedYear"].map(field => (
          <input
            key={field}
            name={field}
            value={book[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            required
            className="w-full p-3 rounded mb-3 bg-white/10 placeholder-gray-400"
          />
        ))}
        <button type="submit" className="bg-indigo-600 px-5 py-2 rounded hover:bg-indigo-700 transition">Add Book</button>
        {message && <p className="mt-3 text-sm">{message}</p>}
      </form>
    </div>
  );
};

export default AddBook;
