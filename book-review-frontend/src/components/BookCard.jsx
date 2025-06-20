import { Link } from "react-router-dom";

const BookCard = ({ book }) => (
  <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
    <h3 className="text-lg font-semibold">{book.title}</h3>
    <p className="text-gray-700 mb-2">by {book.author}</p>
    <Link to={`/books/${book._id}`} className="text-indigo-500 hover:underline">View Details</Link>
  </div>
);

export default BookCard;
