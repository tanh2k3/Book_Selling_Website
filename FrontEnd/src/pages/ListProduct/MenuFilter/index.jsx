import React, { useState, useEffect } from "react";
import "./styles.css";

function MenuFilter({ data = [], setData }) {
  const [cost, setCost] = useState(0);
  const [costMax, setCostMax] = useState(0);
  const [costMin, setCostMin] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountMax, setDiscountMax] = useState(0);
  const [discountMin, setDiscountMin] = useState(0);

  useEffect(() => {
    data.forEach((item) => {
      if (item.price > costMax) {
        setCostMax(item.price);
      }
      if (item.price < costMin) {
        setCostMin(item.price);
      }
      if (item.discount > discountMax) {
        setDiscountMax(item.discount);
      }
      if (item.discount < discountMin) {
        setDiscountMin(item.discount);
      }
    });
    setCost(costMax);
    setDiscount(discountMax);
    console.log(cost, costMax, costMin, discount, discountMax, discountMin);
  }, [data]);

  const handleCostChange = (e) => {
    setCost(e.target.value);
  };

  const handleDiscountChange = (e) => {
    setDiscount(e.target.value);
  };

  return (
    <div className="menufilter">
      <div className="filtercost">
        <h3>Lọc theo giá bán</h3>
        <div className="filtercost__range">
          <input
            type="range"
            min={costMin}
            max={costMax}
            value={cost}
            className="slider"
            id="myRange"
            onChange={handleCostChange}
          />
          <p>
            Giá: <span id="demo">{cost}</span>
          </p>
        </div>
      </div>
      <div className="filterdiscount">
        <h3>Lọc theo giảm giá</h3>
        <div className="filterdiscount__range">
          <input
            type="range"
            min={discountMin}
            max={discountMax}
            className="slider"
            value={discount}
            onChange={handleDiscountChange}
          />
          <p>
            Giảm giá: <span id="demo">{discount}</span>
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
