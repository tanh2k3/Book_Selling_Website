import React from "react";
import './itemsList.css';

const items = [
  {
    imgSrc: "src/assets/english_book.png",
    title: "English Books",
  },
  {
    imgSrc: "src/assets/vietnamese_book.png",
    title: "Sách tiếng Việt",
  },
  {
    imgSrc: "src/assets/van_phong_pham.png",
    title: "Văn phòng phẩm",
  },
  {
    imgSrc: "src/assets/qua_luu_niem.png",
    title: "Quà lưu niệm",
  },
];

const ItemsList = () => {
  return (
    <div className="container">
      {items.map((item, index) => (
        <div key={index} className="item">
          <img src={item.imgSrc} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
