import React from "react";
import { Link } from "react-router-dom";
import './productList.css';
import CardItem from "../../components/CardItem";

const productList = ({ books }) => {
  return (
    <div className="products-container">
      {books.map((book, index) => (
        <CardItem key={index} item={book} />
      ))}
    </div>
  );
};

export default productList;
