import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./ItemsList.css";
import Slide from "../../../components/Slide";

const items = [
  { imgSrc: "src/assets/english_book.png", title: "Văn học", type: "V" },
  { imgSrc: "src/assets/english_book.png", title: "Kinh tế - Kinh doanh", type: "K" },
  { imgSrc: "src/assets/english_book.png", title: "Giáo dục - Học thuật", type: "G" },
  { imgSrc: "src/assets/english_book.png", title: "Thiếu nhi", type: "T" },
  { imgSrc: "src/assets/english_book.png", title: "Kỹ năng sống", type: "A" },
  { imgSrc: "src/assets/english_book.png", title: "Nuôi dạy con", type: "N" },
  { imgSrc: "src/assets/english_book.png", title: "Chính trị - Pháp luật", type: "C" },
  { imgSrc: "src/assets/english_book.png", title: "Điện ảnh - Âm nhạc - Hội họa", type: "I" },
  { imgSrc: "src/assets/english_book.png", title: "Y học - Sức khỏe", type: "Y" },
  { imgSrc: "src/assets/english_book.png", title: "Du lịch - Thể thao", type: "D" },
];

const ItemsList = () => {
  const navigate = useNavigate();

  const handleClick = (type) => {
    navigate(`/list?type=${type}`);
  };

  return (
    <div className="items-list-wrapper">
      <h2 className="items-list-title">Danh mục sản phẩm</h2>
      <div className="container">
        {items.map((item, index) => (
          <div key={index} className="itemtype" onClick={() => handleClick(item.type)}>
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
