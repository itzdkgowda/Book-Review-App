import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-slate-900 text-white p-4 shadow-md">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">📖 BookReview</Link>
      <div className="space-x-4 text-sm sm:text-base">
        <Link to="/books" className="hover:text-indigo-300">Browse</Link>
        <Link to="/profile" className="hover:text-indigo-300">Profile</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
