import React from "react";
import CardItem from "../../../components/CardItem";
import { IoIosFlash } from "react-icons/io";
import Slide from "../../../components/Slide";
import { Link } from "react-router-dom";
import "./FlashSale.css";

const FlashSale = () => {
  return (
    <div className="flash-sale">
      <div className="title-componet">
        <h2>
          {" "}
          F<IoIosFlash />A S H &nbsp; S A L E{" "}
        </h2>
        <Link to="/list" className="viewAll">
          Xem tất cả
        </Link>
      </div>
      <Slide numToShow={5}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <div className="slide" key={index}>
            <CardItem
              item={{
                title: "Sách đang Sale",
                price: Math.floor(50 + Math.random() * 150) * 1000,
                discount: Math.floor(
                  20 + Math.random() * 15 * (0.5 + Math.random())
                ),
                sold: Math.floor(20 + Math.random() * 100),
              }}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default FlashSale;
