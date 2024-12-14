import React from "react";
import "./styles.css";
import { formatPrice } from "../../utils/index.js";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const CardItem = ({ book }) => {
  const defaultItem = {
    id: 0,
    imgSrc:
      "https://cafebiz.cafebizcdn.vn/2019/3/12/photo-1-1552354590822522314238.jpg",
    title: "Title",
    description: "Description",
    price: 100000,
    discount: 10,
    sold: 20,
    rating: 4,
  };

  const { _id, imgSrc, title, description, price, discount, soldCount, rating } = {
    ...defaultItem,
    ...book,
  };

  const priceAfterDiscount = (price) => {
    return formatPrice(price);
  };

  const formatTitle = (title) => {
    if (title.length > 30) {
      return title.slice(0, 30) + "...";
    }
    return title;
  };

  return (
    <div className="cardItem">
      <Link to={`/book/${_id}`} key={_id}>
        <div className="book-card">
          <div className="book-image">
            <img src={imgSrc} alt={title} />
          </div>
          <h2 className="book-title-item">{formatTitle(title)}</h2>
          <div className="book-rating">
            <ReactStars
              count={5}
              size={20}
              activeColor="#ffd700"
              value={rating}
              isHalf={true}
              edit={false}
            />
          </div>
          <div className="book-price">
            <p className="book-discount">
              {" "}
              {discount > 0 ? `-${discount}%` : ""}
            </p>
            <p>{priceAfterDiscount(price)}₫</p>
          </div>
          <p> Đã bán: {soldCount}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
