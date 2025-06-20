const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const bookRoutes = require("./routes/bookRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/books", bookRoutes);
app.get("/", (req, res) => res.send("📚 Book Review API running."));

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`)))
  .catch(err => console.error("❌ MongoDB connection error:", err));
