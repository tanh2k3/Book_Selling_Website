const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

const checkAdmin = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ status: "error", message: "Unauthorized" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    if (req.user.role === "admin") {
      next();
    } else {
      res.status(403).json({ status: "error", message: "Permission denied" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
};

const checkLogin = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ status: "error", message: "Unauthorized" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
};

module.exports = { checkAdmin, checkLogin };
