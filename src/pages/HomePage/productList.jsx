import React from "react";
import { Link } from "react-router-dom";
import './productList.css';

const productList = ({ books }) => {
  return (
    <div className="products-container">
      {books.map((book, index) => (
        <div key={index} className="product-item">
          <img src={book.imgSrc} alt={book.title} className="product-image" />
          <Link to={`/book/${book.id}`} className="product-title-link">
            <h3 className="product-title">{book.title}</h3>
          </Link>
          <p className="product-price">{book.price}</p>
          <p className="product-discount">{book.discount}</p>
          <p className="product-sold">{book.sold}</p>
        </div>
      ))}
    </div>
  );
};

export default productList;
