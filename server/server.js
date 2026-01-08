const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require("cors"); // Import cors
const { errorHandler } = require("./middleware/errorMiddleware"); // Will create this
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
); // Enable CORS with explicit options
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/todos", require("./routes/todoRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Serve uploads
const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(errorHandler);
app.use((err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
