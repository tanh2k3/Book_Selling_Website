import React from "react";
import './productList.css';

const products = [
  {
    imgSrc: "path_to_image_chatgpt_book", // Replace with actual image paths
    title: "Chat GPT Thực Chiến",
    price: "99.710₫",
    discount: "-41%",
    sold: "Đã bán 346",
  },
  {
    imgSrc: "path_to_image_ketoan_book",
    title: "Kế Toán Vỉa Hè",
    price: "169.000₫",
    discount: "-15%",
    sold: "Đã bán 13310",
  },
  {
    imgSrc: "path_to_image_payback_time",
    title: "Payback Time - Ngày Đòi Nợ",
    price: "284.050₫",
    discount: "-5%",
    sold: "Đã bán 32464",
  },
  {
    imgSrc: "path_to_image_vui_nhon",
    title: "Trường Mẫu Giáo Vui Nhộn",
    price: "46.000₫",
    discount: "-22%",
    sold: "Đã bán 5",
  },
  {
    imgSrc: "path_to_image_lon_long_loc",
    title: "Tròn Lăn Long Lóc",
    price: "143.000₫",
    discount: "-24%",
    sold: "Đã bán 5",
  },
  {
    imgSrc: "path_to_image_dopamine",
    title: "Giải mã Hoóc-môn Dopamine",
    price: "129.000₫",
    discount: "-35%",
    sold: "Đã bán 1569",
  },
  {
    imgSrc: "path_to_image_nexus",
    title: "Nexus",
    price: "241.300₫",
    discount: "-26%",
    sold: "Đã bán 32464",
  },
  {
    imgSrc: "path_to_image_dan_soi",
    title: "Dẫn Dắt Một Bầy Sói",
    price: "137.000₫",
    discount: "-30%",
    sold: "Đã bán 5",
  },
];

const ProductsList = () => {
  return (
    <div className="products-container">
      {products.map((product, index) => (
        <div key={index} className="product-item">
          <img src={product.imgSrc} alt={product.title} className="product-image" />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">{product.price}</p>
          <p className="product-discount">{product.discount}</p>
          <p className="product-sold">{product.sold}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
