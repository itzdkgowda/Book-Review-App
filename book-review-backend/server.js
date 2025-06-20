const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB(); // Connect to MongoDB

app.use("/books", require("./routes/bookRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use("/reviews", require("./routes/reviewRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
