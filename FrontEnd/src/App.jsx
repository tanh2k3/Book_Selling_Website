import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookDetail from "./pages/BookDetail";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import VerifyAccount from "./pages/VerifyAccount";
import ListProduct from "./pages/ListProduct";
import Order from "./pages/Order";
import VoucherPage from "./pages/VoucherPage";
import Admin from "./pages/Admin";
import axios from "axios";
import { useUser } from "./context/UserContext"
import { useEffect } from "react";

// router.post("/refresh-token", async (req, res) => {
//   const { token } = req.body;
//   try {
//     jwt.verify(token, SECRET_KEY, async (error, decoded) => {
//       if (error) {
//         return res.status(401).json({ message: "Token không hợp lệ." });
//       }
//       const newToken = jwt.sign(
//         { userId: decoded.userId, email: decoded.email, role: decoded.role },
//         SECRET_KEY,
//         { expiresIn: "1h" }
//       );
//       const user = await User.findById(decoded.userId);
//       res.status(200).json({ token: newToken, user });
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Lỗi khi làm mới token." });
//   }
// });

function App() {

  useEffect(() => {
    const refreshToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.post("http://localhost:3001/refresh-token", { token });
          localStorage.setItem("token", res.data.token);
          setUser(res.data.user);
        } catch (error) {
          console.error(error);
        }
      }
    };
    refreshToken();
  }, []);


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify" element={<VerifyAccount />} />
          <Route path="/list" element={<ListProduct />} />
          <Route path="/order" element={<Order />} />
          <Route path="/forgot-password" element={<VerifyAccount isresetpass={true} />} />
          <Route path="/voucher" element={<VoucherPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
