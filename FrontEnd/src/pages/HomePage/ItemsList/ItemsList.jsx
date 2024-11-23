import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./ItemsList.css";

const items = [
  { imgSrc: "src/assets/english_book.png", title: "Sách Tiếng Anh", type: "english" },
  { imgSrc: "src/assets/vietnamese_book.png", title: "Sách tiếng Việt", type: "vietnamese" },
  { imgSrc: "src/assets/van_phong_pham.png", title: "Văn phòng phẩm", type: "stationery" },
  { imgSrc: "src/assets/qua_luu_niem.png", title: "Quà lưu niệm", type: "gifts" },
];

const ItemsList = () => {
  const navigate = useNavigate();

  const handleClick = (type) => {
    navigate(`/books/${type}`);
  };

  return (
    <div className="items-list-wrapper">
      <h2 className="items-list-title">Danh mục sản phẩm</h2>
      <div className="container">
        {items.map((item, index) => (
          <div key={index} className="item" onClick={() => handleClick(item.type)}>
            <img src={item.imgSrc} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default ItemsList;
