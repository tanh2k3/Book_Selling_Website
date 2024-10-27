import React from "react";
import "./styles.css";
import { formatPrice } from "../../utils/index.js";
import { Link } from "react-router-dom";

const CardItem = ({ item }) => {
  const defaultItem = {
    id: 0,
    imgSrc:
      "https://cafebiz.cafebizcdn.vn/2019/3/12/photo-1-1552354590822522314238.jpg",
    title: "Title",
    description: "Description",
    price: 100000,
    discount: 10,
    sold: 20,
  };

  const { id, imgSrc, title, description, price, discount, sold } = {
    ...defaultItem,
    ...item,
  };

  const priceAfterDiscount = (price) => {
    return formatPrice(price - (price * discount) / 100);
  };

  return (
    <div className="cardItem">
      <div className="imageItem">
        <img src={imgSrc} alt={title} />
      </div>
      <Link to={`/book/${id}`} className="product-title-link">
        <h3 className="product-title">{title}</h3>
      </Link>
      <p className="currPrice">{priceAfterDiscount(price)}₫</p>
      <div className="oldPrice">
        <p className="discountPercent">{discount}%</p>
        <strong>{formatPrice(price)}₫</strong>
      </div>
      <p className="amount">Đã bán: {sold}</p>
    </div>
  );
};

export default CardItem;
