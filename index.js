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
server.use(cors());

// mongodb URI
const URI =
  "mongodb+srv://kobbyofori9:CplNwuDLRTbms5ig@cluster0.kassjvl.mongodb.net/";

// connect mongodb
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
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
server.listen(8001, "0.0.0.0", () =>
  console.log(
    "Hello, Elijah welcomes you and server is ready to accept request"
  )
);

//CplNwuDLRTbms5ig
//CplNwuDLRTbms5ig
