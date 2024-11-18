const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from product controller");
});

// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = await User.findOne({ email: username });
//     if (user) {
//       const validPassword = await bcrypt.compare(password, user.password);
//       if (validPassword) {
//         const token = jwt.sign(
//           { userId: user._id, email: user.email },
//           SECRET_KEY,
//           { expiresIn: "1h" }
//         );
//         return res
//           .status(200)
//           .json({ status: "success", token: token, user: user });
//       } else {
//         return res
//           .status(401)
//           .json({ status: "fail", message: "Invalid credentials" });
//       }
//     } else {
//       return res
//         .status(404)
//         .json({ status: "fail", message: "User not found" });
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ status: "error", message: "Server error" });
//   }
// });

// app.post("/forgot-password", (req, res) => {
//   const { email } = req.body;
//   User.findOne({ email }).then((user) => {
//     if (!user) {
//       res.send({ status: "fail", message: "Email không tồn tại" });
//     } else {
//       /*const newPassword = Math.random().toString(36).slice(-8);
//       user.password = newPassword;*/
//       user.save().then(() => {
//         sendMail(
//           email,
//           "Mật khẩu của bạn",
//           `Mật khẩu của bạn là: ${user.password}`
//         );
//         res.send({
//           status: "success",
//           message: "Mật khẩu đã được gửi đến email của bạn",
//         });
//       });
//     }
//   });
// });

// app.post("/register", (req, res) => {
//   const { name, sdt, email, password } = req.body;
//   User.findOne({ email: email }).then((data) => {
//     if (data) res.send({ message: "Email đã tồn tại", status: "failed" });
//     else {
//       Unc.findOne({ email: email }).then((data2) => {
//         if (data2)
//           res.send({
//             message:
//               "Email đã đăng ký nhưng chưa được xác thực. Kiểm tra email để kích hoạt tài khoản.",
//             status: "failed",
//           });
//         else {
//           let v_number = Math.floor(Math.random() * 1000000);
//           v_number = v_number.toString().padStart(6, "0");
//           const newUser = new Unc({
//             email,
//             name,
//             password,
//             sdt,
//             verifynumber: v_number,
//           });
//           newUser.save().then(() => {
//             sendMail(email, "Xác thực tài khoản", v_number);
//             res.send({
//               message: "Kiểm tra email để kích hoạt tài khoản",
//               status: "success",
//             });
//           });
//         }
//       });
//     }
//   });
// });

// app.post("/search", (req, res) => {
//   const { email } = req.body;
//   console.log(email);
//   Unc.findOne({ email: email }, { password: 0 }).then((data) => {
//     if (data) res.send({ status: "success", user: data });
//     else
//       User.findOne({ email: email }, { password: 0 }).then((userdata) => {
//         if (userdata)
//           res.send({
//             status: "failed",
//             message: "Email đã đăng ký. Hãy đăng nhập.",
//           });
//         else res.send({ status: "failed", message: "Email not found" });
//       });
//   });
// });

// app.post("/verify", (req, res) => {
//   const { email, number } = req.body;
//   console.log(email, number);
//   Unc.findOne({ email: email, verifynumber: number }).then((data) => {
//     if (data) {
//       const newUser = new User({
//         name: data.name,
//         sdt: data.sdt,
//         email: data.email,
//         password: data.password,
//       });
//       newUser.save().then(() => {
//         Unc.deleteOne({ email: email }).then(() => {
//           res.send({
//             status: "success",
//             message: "Tài khoản đã được kích hoạt",
//           });
//         });
//       });
//     } else {
//       res.send({ status: "failed", message: "Mã xác minh chưa chính xác" });
//     }
//   });
// });

// app.post("/resend", (req, res) => {
//   const { email } = req.body;
//   console.log(email);
//   waitUser.findOne({ email: email }).then((data) => {
//     if (data) {
//       sendMail(email, "Mã xác thực tài khoản", data.verifiedNumber);
//       res.send({ status: "success", message: "Mã xác thực đã được gửi" });
//     } else {
//       res.send({ status: "failed", message: "Email not found" });
//     }
//   });
// });

module.exports = router;
