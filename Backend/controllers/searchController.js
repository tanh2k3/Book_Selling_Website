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
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  const title = req.query.title || "";
  try {
    const products = await Product.find({
      title: { $regex: title, $options: "i" },
    })
      .limit(parseInt(limit))
      .skip(parseInt(offset));
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

module.exports = router;
