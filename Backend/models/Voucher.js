const mongoose = require("mongoose");

const voucherSchema = new mongoose.Schema({
  code: { type: String, required: true },
  discount: { type: Number, required: true },
  description: { type: String },
  expiredAt: { type: Date },
  usedCount: { type: Number, default: 0 },
});

const Voucher = mongoose.model("Voucher", voucherSchema);

module.exports = Voucher;
