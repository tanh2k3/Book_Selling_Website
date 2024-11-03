import React, { useState } from "react";
import "./styles.css";

function MenuFilter() {
  const [cost, setCost] = useState(0);
  const [discount, setDiscount] = useState(0);

  const handleCostChange = (e) => {
    setCost(e.target.value);
  };

  const handleDiscountChange = (e) => {
    setDiscount(e.target.value);
  };

  return (
    <div className="menufilter">
      <div className="filtercost">
        <h3>Filter by cost</h3>
        <div className="filtercost__range">
          <input
            type="range"
            min="0"
            max="100"
            value={cost}
            className="slider"
            id="myRange"
            onChange={handleCostChange}
          />
          <p>
            Value: <span id="demo">{cost}</span>
          </p>
        </div>
      </div>
      <div className="filterdiscount">
        <h3>Filter by discount</h3>
        <div className="filterdiscount__range">
          <input
            type="range"
            min="0"
            max="100"
            className="slider"
            value={discount}
            onChange={handleDiscountChange}
          />
          <p>
            Value: <span id="demo"></span>
            Value: <span id="demo">{discount}</span>
          </p>
        </div>
      </div>
      <div className="filtertype">
        <h3>Filter by type</h3>
        <div className="filtertype__checkbox">
          <label>
            <input type="checkbox" name="type" value="hardcover" />
            Hardcover
          </label>
          <label>
            <input type="checkbox" name="type" value="paperback" />
            Paperback
          </label>
        </div>
      </div>
    </div>
  );
}

export default MenuFilter;
