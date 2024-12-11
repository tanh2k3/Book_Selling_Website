import React from "react";
import "./styles.css";
import { formatPrice } from "../../utils/index.js";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import axios from "axios";
import { useState,useEffect } from "react";
const CardItem = ({ book }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      for (let i = 0; i < user.favorite.length; i++) {
        if (user.favorite[i].product === book._id) {
          setIsFavourite(true);
          console.log("true");
          break;
        }
      }
    }
  }, []);

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

  const {
    _id,
    imgSrc,
    title,
    description,
    price,
    discount,
    soldCount,
    rating,
  } = {
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
  const handleAddFavourite = () => {
    const jwt = localStorage.getItem("token");
    if (!jwt) {
      alert("Vui lòng đăng nhập để thêm sản phẩm vào danh sách yêu thích.");
    }
    const userId = localStorage.getItem("userId");
    const productId = _id;
    const data = { productId };
    axios.post("http://localhost:3001/favorite", data, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const user = JSON.parse(localStorage.getItem("user"));
    user.favorite.push({ product: productId });
    localStorage.setItem("user", JSON.stringify(user));
    setIsFavourite(true);
  };
  const handleRemoveFavourite = () => {
    const jwt = localStorage.getItem("token");
    if (!jwt) {
      alert("Vui lòng đăng nhập để xóa sản phẩm khỏi danh sách yêu thích.");
    }
    const userId = localStorage.getItem("userId");
    const productId = _id;
    axios.delete(`http://localhost:3001/favorite`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      data: { productId },
    });
    const user = JSON.parse(localStorage.getItem("user"));
    for (let i = 0; i < user.favorite.length; i++) {
      if (user.favorite[i].product === productId) {
        user.favorite.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("user", JSON.stringify(user));
    setIsFavourite(false);
  }

  const handleAddToCart = async () => {
    const jwt = localStorage.getItem("token");
    if (!jwt) {
      alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng.");
    } else {
      const userId = localStorage.getItem("userId");
      const productId = _id;
      const quantity = 1;
      const data = { productId, quantity };
      const response = await axios.post("http://localhost:3001/cart", data, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log(response.data);
    }
  };

  return (
    <div className="cardItem">
      <div className="book-card">
        <div className="book-image">
          <Link to={`/book/${_id}`}>
            <img src={imgSrc} alt={title} />
          </Link>
        </div>
        <h2 className="book-title-item">
          <Link to={`/book/${_id}`}>{formatTitle(title)}</Link>
        </h2>
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
        <div className={isFavourite ? "book-favourite red_hide" : "book-favourite"} onClick={isFavourite ? handleRemoveFavourite : handleAddFavourite}>
          <FaHeart />
        </div>
        <div className="book-cart" onClick={handleAddToCart}>
          <FaCartPlus />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
