import React from "react";
import "./styles.css";
import {formatPrice} from "../../utils/index.js"

const CardItem = (item) => {
  const defaultItem = {
    image: "https://cafebiz.cafebizcdn.vn/2019/3/12/photo-1-1552354590822522314238.jpg",
    title: "Title",
    description: "Description",
    price: 100000,
    discount: 10,
    amountSell:20
  };

  const { image, title, description, price, discount, amountSell } = { ...defaultItem, ...item };

  const priceAfterDiscount = (price) => {
    return formatPrice(price - (price * discount) / 100);
  }

  return (
    <div className="cardItem">
      <div className="imageItem">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
        <p className="currPrice">{priceAfterDiscount(price)} VND</p>
        <div className="oldPrice">
          <p className="discountPercent">{discount}%</p>
          <strong>{formatPrice(price)} VND</strong>
      </div>
      <p className="amount">Đã bán: {amountSell}</p>
    </div>
  );
};

export default CardItem;
