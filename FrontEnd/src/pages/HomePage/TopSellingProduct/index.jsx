import React from "react";
import CardItem from "../../../components/CardItem";
import { FaFire } from "react-icons/fa";
import Slide from "../../../components/Slide";
import "./styles.css";

const TopSellingProduct = () => {
    return (
        <div className="top-selling-product">
            <h2><FaFire /> Sản phẩm bán chạy</h2>
            <Slide numToShow={6}>
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