import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/:id" element={<BookDetails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </>
);

export default App;
