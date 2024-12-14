const express = require("express");
const router = express.Router();
const Voucher = require("../models/Voucher");
const { checkAdmin } = require("../services/verityService"); // Quyen admin

router.get("/", async (req, res) => {
  try {
    const vouchers = await Voucher.find();
    res.status(200).json({ status: "success", data: vouchers });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

router.post("/", checkAdmin, async (req, res) => {
  try {
    const voucher = new Voucher(req.body);
    await voucher.save();
    res.status(201).json({ status: "success", data: voucher });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

router.put("/:id", checkAdmin, async (req, res) => {
  try {
    const voucher = await Voucher.findById(req.params.id);
    if (!voucher) {
      return res
        .status(404)
        .json({ status: "fail", message: "Voucher not found" });
    }
    voucher.set(req.body);
    await voucher.save();
    res.status(200).json({ status: "success", data: voucher });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

router.delete("/:id", checkAdmin, async (req, res) => {
  try {
    const voucher = await Voucher.findById(req.params.id);
    if (!voucher) {
      return res
        .status(404)
        .json({ status: "fail", message: "Voucher not found" });
    }
    await voucher.remove();
    res.status(200).json({ status: "success", data: voucher });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

module.exports = router;
