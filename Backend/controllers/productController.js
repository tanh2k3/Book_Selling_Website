const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const mongoose = require("mongoose");
const { checkAdmin } = require("../services/verityService");

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

// Get a product by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID format" });
  }
  try {
    const product = await Product.findById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});


router.post("/", checkAdmin, async (req, res) => {
  try {
    const productData = {
      imgSrc: req.body.imgSrc,
      title: req.body.title,
      author: req.body.author,
      translator: req.body.translator,
      price: req.body.price,
      originalPrice: req.body.originalPrice,
      discount: req.body.discount,
      rating: req.body.rating,
      reviewsCount: req.body.reviewsCount,
      soldCount: req.body.soldCount,
      features: req.body.features,
      similarBooks: req.body.similarBooks,
      sku: req.body.sku,
      ageGroup: req.body.ageGroup,
      supplier: req.body.supplier,
      publisher: req.body.publisher,
      publicationYear: req.body.publicationYear,
      language: req.body.language,
      weight: req.body.weight,
      dimensions: req.body.dimensions,
      pages: req.body.pages,
      binding: req.body.binding,
      description: req.body.description,
      type: req.body.type,
    };

    const product = new Product(productData);
    await product.save();
    res.status(201).json({ status: "success", data: product });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

// Update an existing product - Admin only
router.put("/:id", checkAdmin, async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID format" });
  }
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ status: "fail", message: "Product not found" });
    }

    const updatedData = {
      imgSrc: req.body.imgSrc,
      title: req.body.title,
      author: req.body.author,
      translator: req.body.translator,
      price: req.body.price,
      originalPrice: req.body.originalPrice,
      discount: req.body.discount,
      rating: req.body.rating,
      reviewsCount: req.body.reviewsCount,
      soldCount: req.body.soldCount,
      features: req.body.features,
      similarBooks: req.body.similarBooks,
      sku: req.body.sku,
      ageGroup: req.body.ageGroup,
      supplier: req.body.supplier,
      publisher: req.body.publisher,
      publicationYear: req.body.publicationYear,
      language: req.body.language,
      weight: req.body.weight,
      dimensions: req.body.dimensions,
      pages: req.body.pages,
      binding: req.body.binding,
      description: req.body.description,
      type: req.body.type,
    };

    product.set(updatedData);
    await product.save();
    res.status(200).json({ status: "success", data: product });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

// Delete a product - Admin only
router.delete("/:id", checkAdmin, async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID format" });
  }
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ status: "fail", message: "Product not found" });
    }
    await product.deleteOne();
    res.status(200).json({ status: "success", message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

module.exports = router;