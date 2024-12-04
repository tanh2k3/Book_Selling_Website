import React from "react";
import CardItem from "../../../components/CardItem";
import { FaFire } from "react-icons/fa";
import Slide from "../../../components/Slide";
import { Link } from "react-router-dom";
import "./styles.css";

const TopSellingProduct = () => {
  return (
    <div className="top-selling-product">
      <div className="title-componet">
        <h3>
          <FaFire /> Sản phẩm bán chạy
        </h3>
        <Link to="/list" className="viewAll">Xem tất cả</Link>
      </div>
      <Slide numToShow={5}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <div className="slide" key={index}>
            <CardItem />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default TopSellingProduct;
