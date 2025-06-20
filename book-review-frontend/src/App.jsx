import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Profile from "./pages/Profile";
import AddBook from "./pages/AddBook";
import AddReview from "./pages/AddReview";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/books/:id" element={<BookDetails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/add-book" element={<AddBook />} /> 
      <Route path="/add-review" element={<AddReview />} />
    </Routes>
  </>
);

export default App;
