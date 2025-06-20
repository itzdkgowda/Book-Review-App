import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-indigo-600 text-white p-4 shadow">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">📚 BookReview</Link>
      <div className="space-x-4">
        <Link to="/register" className="hover:underline">Register</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
