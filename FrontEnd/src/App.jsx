import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookDetail from "./pages/BookDetail";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserProvider } from "./context/UserContext";
import VerifyAccount from "./pages/VerifyAccount";
import ListProduct from "./pages/ListProduct";
import Order from "./pages/Order";

function App() {
  return (
    <UserProvider>
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
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
