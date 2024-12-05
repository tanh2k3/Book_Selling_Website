import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const ClassicBrand = () => {
  const classicBrand = [
    {
      name: "Penguin Classics",
      description: "A series of classic literature published by Penguin Books.",
    },
    {
      name: "Oxford World's Classics",
      description: "A series of classic works from Oxford University Press.",
    },
    {
      name: "Everyman's Library",
      description:
        "A series of reprints of classic literature published by Alfred A. Knopf.",
    },
  ];

  return (
    <div className="classic-brand">
      <h2>Thương hiệu kinh điển</h2>
      <div className="clabra-container">
        {classicBrand.map((brand, index) => (
          <div className="clabra-item" key={index}>
            <h2>{brand.name}</h2>
            <p>{brand.description}</p>
          </div>
        ))}
      </div>
      <div className="clabra-more">
        <Link to="/list" className="viewAll">Xem tất cả</Link>
      </div>
    </div>
  );
};

export default ClassicBrand;
