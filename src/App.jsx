import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookDetail from "./pages/BookDetail";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListProduct from "./pages/ListProduct";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/book/:id" element={<BookDetail/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/list" element={<ListProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
