import React from "react";
import CardItem from "../../../components/CardItem";
import { FaFire } from "react-icons/fa";
import Slide from "../../../components/Slide";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";

const TopSellingProduct = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3001/search/top10");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="top-selling-product">
      <div className="title-componet">
        <h3>
          <FaFire /> Sản phẩm bán chạy
        </h3>
        <Link to="/list" className="viewAll">
          Xem tất cả
        </Link>
      </div>
      <Slide numToShow={6}>
        {books.map((book, index) => (
          <CardItem key={book._id} book={book} />
        ))}
      </Slide>
    </div>
  );
};

export default TopSellingProduct;
