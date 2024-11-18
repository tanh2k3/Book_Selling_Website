const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    password: String,
    sdt: String,
    role: String,
  },
  { versionKey: false }
);

const User = mongoose.model("accounts", UserSchema);

module.exports = User;
