import React from "react";
import CardItem from "../../../components/CardItem";
import { IoIosFlash } from "react-icons/io";
import Slide from "../../../components/Slide";
import "./FlashSale.css";

const FlashSale = () => {
    return (
        <div className="flash-sale">
            <h2> F<IoIosFlash />A S H &nbsp; S A L E </h2>
            <Slide numToShow={6}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                    <div className="slide" key={index}>
                        <CardItem item={{ title: "Sách đang Sale", discount: "50" }} />
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default FlashSale;