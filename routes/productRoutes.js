// routes/productRoutes.js
const express = require("express");
const multer = require("multer");
const productController = require("../controllers/productController");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });


// Upload product image
router.post("/upload", upload.single("image"), productController.uploadProductImage);

// Get all products
router.get("/products", productController.getAllProducts);

// Update a product by ID
router.put("/products/:id", productController.updateProductById);

// Delete a product by ID
router.delete("/products/:id", productController.deleteProductById);

module.exports = router;
