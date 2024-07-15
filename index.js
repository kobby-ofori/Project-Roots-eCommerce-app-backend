require("dotenv").config()

const express = require("express");

const mongoose = require("mongoose");

// const multer = require("multer");

const cors = require("cors");

const productRoutes = require("./routes/productRoutes");

//authentication route
const userRoutes = require("./routes/user");

const server = express();

// middlewares
server.use(express.json());

// Use the CORS middleware
server.use(cors({
  origin: ["http://localhost:3000", "https://roots-ecommerce-app.onrender.com"],
}));

// mongodb URI
const URI = process.env.MONGO_URI;

// connect mongodb
mongoose
  .connect(URI)
  .then(() => {
    console.log(`MongoDB connected successfully`);
  })
  .catch((err) => {
    console.log(err);
  });

// routes for auth and product
server.use("/api", productRoutes);
server.use("/api/user", userRoutes);

// server listening
const port = process.env.PORT || 8001 
server.listen(port, () =>
  console.log(
    `Hello, Elijah's server is listening at port ${port} and it's ready to accept request`
  )
);

