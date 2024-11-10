import React from "react";
import { Link } from "react-router-dom";
import './ProductsList.css';
import CardItem from "../../../components/CardItem";

const ProductsList = ({ books }) => {
  return (
    <div className="products-container">
      {books.map((book, index) => (
        <CardItem key={index} item={book} />
      ))}
    </div>
  );
};

export default ProductsList;
