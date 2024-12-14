const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    password: String,
    sdt: String,
    role: { type: String, default: "user" },
    favorite: [
      {
        favProId: String
      }
    ],
    cart: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
        quantity: Number,
      },
    ],
  },
  { versionKey: false }
);

const User = mongoose.model("accounts", UserSchema);

module.exports = User;
