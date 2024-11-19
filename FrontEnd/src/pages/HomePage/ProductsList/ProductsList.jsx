import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductsList.css";

const ProductsList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/product")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="products-container">
      {books.map((book) => (
        <Link to={`/book/${book._id}`} key={book._id}>
          <div className="book-card">
            <img src={book.imgSrc} alt={book.title} />
            <h2>{book.title}</h2>
            <p>Price: {book.price}</p>
            <p>Rating: {book.rating} / 5</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;
