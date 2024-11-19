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

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid book ID format" });
  }
  try {
    const book = await Product.findById(id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

// Create product - Admin
router.get("/", checkAdmin, async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ status: "success", data: product });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

// Update product - Admin
router.put("/:id", checkAdmin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ status: "fail", message: "Product not found" });
    }
    product.set(req.body);
    await product.save();
    res.status(200).json({ status: "success", data: product });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

// Delete product - Admin
router.delete("/:id", checkAdmin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ status: "fail", message: "Product not found" });
    }
    await product.remove();
    res.status(200).json({ status: "success", data: product });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

module.exports = router;
