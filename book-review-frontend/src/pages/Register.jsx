import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/register", form);
      alert("Registration successful!");
      navigate("/login");
    } catch {
      alert("Registration failed.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" onChange={handleChange} className="w-full p-2 border rounded" placeholder="Name" required />
        <input name="email" type="email" onChange={handleChange} className="w-full p-2 border rounded" placeholder="Email" required />
        <input name="password" type="password" onChange={handleChange} className="w-full p-2 border rounded" placeholder="Password" required />
        <button className="bg-indigo-600 text-white w-full py-2 rounded hover:bg-indigo-700">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
