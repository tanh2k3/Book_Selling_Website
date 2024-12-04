const jwt = require("jsonwebtoken");
const { sendMail } = require("../services/emailService");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const {ObjectId} = require('mongodb');

require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";

const User = require("../models/User");
const Unc = require("../models/Unc");
const Order = require("../models/Order");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ email: username });
    if (user) {
      // Chưa có mã hóa password
      // const validPassword = await bcrypt.compare(password, user.password);
      const validPassword = password === user.password;
      if (validPassword) {
        const token = jwt.sign(
          { userId: user._id, email: user.email, role: user.role },
          SECRET_KEY,
          { expiresIn: "1h" }
        );
        return res
          .status(200)
          .json({ status: "success", token: token, user: user });
      } else {
        return res
          .status(401)
          .json({ status: "fail", message: "Invalid credentials" });
      }
    } else {
      return res
        .status(404)
        .json({ status: "fail", message: "User not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.send({ status: "fail", message: "Email không tồn tại" });
    } else {
      user.save().then(() => {
        sendMail(
          email,
          "Mật khẩu của bạn",
          `Mật khẩu của bạn là: ${user.password}`
        );
        res.send({
          status: "success",
          message: "Mật khẩu đã được gửi đến email của bạn",
        });
      });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

router.post("/register", async (req, res) => {
  const { name, sdt, email, password } = req.body;
  try {
    const data = await User.findOne({ email: email });
    if (data) {
      res.send({ message: "Email đã tồn tại", status: "failed" });
    } else {
      const data2 = await Unc.findOne({ email: email });
      if (data2) {
        res.send({
          message:
            "Email đã đăng ký nhưng chưa được xác thực. Kiểm tra email để kích hoạt tài khoản.",
          status: "failed",
        });
      } else {
        let v_number = Math.floor(Math.random() * 1000000);
        v_number = v_number.toString().padStart(6, "0");
        const newUser = new Unc({
          email,
          name,
          password,
          sdt,
          verifynumber: v_number,
          role: "user",
        });
        await newUser.save();
        sendMail(email, "Xác thực tài khoản", v_number);
        res.send({
          message: "Kiểm tra email để kích hoạt tài khoản",
          status: "success",
        });
      }
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

router.post("/checkEmail", async (req, res) => {
  const { email } = req.body;
  try {
    const data = await Unc.findOne({ email: email }, { password: 0 });
    if (data) {
      res.send({ status: "success", user: data });
    } else {
      const userdata = await User.findOne({ email: email }, { password: 0 });
      if (userdata) {
        res.send({
          status: "failed",
          message: "Email đã đăng ký. Hãy đăng nhập.",
        });
      } else {
        res.send({ status: "failed", message: "Email not found" });
      }
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

router.post("/verify", async (req, res) => {
  const { email, number } = req.body;
  try {
    const data = await Unc.findOne({ email: email, verifynumber: number });
    if (data) {
      const newUser = new User({
        name: data.name,
        sdt: data.sdt,
        email: data.email,
        password: data.password,
        role: "user",
      });
      await newUser.save();
      await Unc.deleteOne({ email: email });
      res.send({
        status: "success",
        message: "Tài khoản đã được kích hoạt",
      });
    } else {
      res.send({ status: "failed", message: "Mã xác minh chưa chính xác" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

router.post("/resend", async (req, res) => {
  const { email } = req.body;
  try {
    const data = await waitUser.findOne({ email: email });
    if (data) {
      sendMail(email, "Mã xác thực tài khoản", data.verifiedNumber);
      res.send({ status: "success", message: "Mã xác thực đã được gửi" });
    } else {
      res.send({ status: "failed", message: "Email not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

router.post('/update-name', (req, res) => {
  const { email, name } = req.body;
  User.findOneAndUpdate({ email: email }, { name: name }, { new: true }).then((user) => {
    if (user) {
      res.send({ status: 'success', user });
    } else {
      res.send({ status: 'fail', message: 'User not found' });
    }
  }).catch(error => res.send({ status: 'fail', message: error.message }));
});

router.post('/update-phone', (req, res) => {
  const { email, phone } = req.body;
  User.findOneAndUpdate({ email: email }, { sdt: phone }, { new: true }).then((user) => {
    if (user) {
      res.send({ status: 'success', user });
    } else {
      res.send({ status: 'fail', message: 'User not found' });
    }
  }).catch(error => res.send({ status: 'fail', message: error.message }));
});

router.post('/update-password', (req, res) => {
  const { email, password } = req.body;
  User.findOneAndUpdate({ email: email }, { password: password }, { new: true }).then((user) => {
    if (user) {
      res.send({ status: 'success', user });
    } else {
      res.send({ status: 'fail', message: 'User not found' });
    }
  }).catch(error => res.send({ status: 'fail', message: error.message }));
});

router.get('/orders/:id', (req, res) => {
  let { id } = req.params;
  id = new ObjectId(id);
  Order.find({ "userId": id }).then((data)=> {
      res.status(200);
      res.send(data);
  })
});

// API xóa sản phẩm khỏi giỏ hàng
router.delete('/cart/:userId/:productId', async (req, res) => {
  const { userId, productId } = req.params;

  try {
      // Tìm user theo userId
      const user = await User.findById(userId);

      if (!user) {
          return res.status(404).json({ message: 'Người dùng không tồn tại.' });
      }

      // Lọc bỏ sản phẩm khỏi giỏ hàng
      const updatedCart = user.cart.filter(item => item.product.toString() !== productId);

      // Cập nhật giỏ hàng trong cơ sở dữ liệu
      user.cart = updatedCart;
      await user.save();

      res.status(200).json({ message: 'Sản phẩm đã được xóa khỏi giỏ hàng.', cart: updatedCart });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Lỗi khi xóa sản phẩm khỏi giỏ hàng.' });
  }
});

module.exports = router;
