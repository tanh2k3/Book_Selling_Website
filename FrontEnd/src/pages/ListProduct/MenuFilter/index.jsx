import React, { useEffect, useState } from "react";
import "./styles.css";

function MenuFilter({ books, setMinPrice, setMaxPrice, setType, setIsSortByPrice, setIsSortByRating, setIsSortByDiscount }) {
  const [localMinPrice, setLocalMinPrice] = useState(0);
  const [localMaxPrice, setLocalMaxPrice] = useState(999999999);
  const [localType, setLocalType] = useState("");
  const [sortByPrice, setSortByPrice] = useState(false);
  const [sortByRating, setSortByRating] = useState(false);
  const [sortByDiscount, setSortByDiscount] = useState(false);
  const [listType, setListType] = useState([]);

  const handleFilterChange = () => {
    setMinPrice(localMinPrice);
    setMaxPrice(localMaxPrice);
    setType(localType);
    setIsSortByPrice(sortByPrice);
    setIsSortByRating(sortByRating);
    setIsSortByDiscount(sortByDiscount);
  };

  useEffect(() => {
    let minPrice = 999999999;
    let maxPrice = 0;
    const types = new Set();
    books.forEach((book) => {
      console.log(book);
      types.add(book.type);
      if (book.price < minPrice) {
        minPrice = book.price;
      }
      if (book.price > maxPrice) {
        maxPrice = book.price;
      }
    });
    setListType([...types]);
    setLocalMinPrice(minPrice);
    setLocalMaxPrice(maxPrice);
  }, [books]);

  return (
    <div className="menu-filter">
      <h1>Sắp xếp</h1>
      <div>
        <label>Giá thấp nhấp:</label>
        <input
          type="number"
          value={localMinPrice}
          onChange={(e) => setLocalMinPrice(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Giá cao nhất:</label>
        <input
          type="number"
          value={localMaxPrice}
          onChange={(e) => setLocalMaxPrice(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Thể loại:</label>
        <select value={localType} onChange={(e) => setLocalType(e.target.value)}>
          <option value="">Tất cả</option>
          {listType.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Sắp xếp theo Giá:</label>
        <input
          type="checkbox"
          checked={sortByPrice}
          onChange={(e) => setSortByPrice(e.target.checked)}
        />
      </div>
      <div>
        <label>Sắp xếp theo đánh giá:</label>
        <input
          type="checkbox"
          checked={sortByRating}
          onChange={(e) => setSortByRating(e.target.checked)}
        />
      </div>
      <div>
        <label>Sắp xếp theo giảm giá:</label>
        <input
          type="checkbox"
          checked={sortByDiscount}
          onChange={(e) => setSortByDiscount(e.target.checked)}
        />
      </div>
      <button onClick={handleFilterChange}>Áp dụng</button>
    </div>
  );
}

export default MenuFilter;