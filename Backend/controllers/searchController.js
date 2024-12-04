const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const mongoose = require("mongoose");

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

router.post("/filter", async (req, res) => {
  try {
    const {
      type = "",
      title = "",
    } = req.body;
    const { page = 1, limit = 10 } = req.query;
    const {
      isSortByPrice = false,
      isSortByRating = false,
      isSortByDiscount = false,
    } = req.body;
    // Construct the query object
    const query = {};
    if (type !== "") query.type = type;
    if (title !== "") query.title = { $regex: title, $options: "i" };
  

    // Get total count of matching products
    const total = await Product.find(query).countDocuments();

    // Get products with pagination
    let products = await Product.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit);

    // Apply sorting if specified
    if (isSortByPrice) {
      products = products.sort((a, b) => a.price - b.price);
    }
    if (isSortByRating) {
      products = products.sort((a, b) => b.rating - a.rating);
    }
    if (isSortByDiscount) {
      products = products.sort((a, b) => b.discount - a.discount);
    }
    res.status(200).json({ products, total });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

module.exports = router;
