import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { RiRefreshLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import "./styles.css";

function MenuFilter({
  title,
  type,
  author,
  isSortByPrice,
  isSortByRating,
  isSortByDiscount,
  setMinPrice,
  setMaxPrice,
  setType,
  setTitle,
  setAuthor,
  setIsSortByPrice,
  setIsSortByRating,
  setIsSortByDiscount,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle sorting
  const handleSort = (type) => {
    switch (type) {
      case "price":
        setIsSortByPrice(isSortByPrice === 1 ? -1 : 1);
        break;
      case "rating":
        setIsSortByRating(isSortByRating === 1 ? -1 : 1);
        break;
      case "discount":
        setIsSortByDiscount(isSortByDiscount === 1 ? -1 : 1);
        break;
      default:
        break;
    }
  };

  // Handle price filter
  const handleFilterPrice = (min, max) => {
    if (max > min) {
      setMinPrice(min);
      setMaxPrice(max);
    } else {
      alert("Giá tối đa phải lớn hơn giá tối thiểu.");
    }
  };

  // Update the URL based on current filter values
  const updateURL = () => {
    const params = new URLSearchParams(location.search);
    params.set("title", title);
    params.set("type", type);
    params.set("author", author);
    navigate({
      pathname: location.pathname,
      search: params.toString(),
    });
  };

  useEffect(() => {
    updateURL();
  }, [title, type, author, isSortByPrice, isSortByRating, isSortByDiscount]);

  const [localTitle, setLocalTitle] = useState(title);
  const [localAuthor, setLocalAuthor] = useState(author);
  const [localType, setLocalType] = useState(type);
  const [localMinPrice, setLocalMinPrice] = useState(0);
  const [localMaxPrice, setLocalMaxPrice] = useState(999999);

  // Clear filters function
  const clearFilters = () => {
    setLocalTitle("");
    setLocalAuthor("");
    setLocalType("");
    setLocalMinPrice(0);
    setLocalMaxPrice(999999);
    setIsSortByPrice(0);
    setIsSortByRating(0);
    setIsSortByDiscount(0);
  };

  // Trigger search function
  const handleSearch = () => {
    setTitle(localTitle);
    setAuthor(localAuthor);
    setType(localType);
  };

  // Enum options for Type
  const typeOptions = [
    { label: "Văn học", value: "V" },
    { label: "Kinh tế - Kinh doanh", value: "K" },
    { label: "Giáo dục - Học thuật", value: "G" },
    { label: "Thiếu nhi", value: "T" },
    { label: "Kỹ năng sống", value: "A" },
    { label: "Nuôi dạy con", value: "N" },
    { label: "Chính trị - Pháp luật", value: "C" },
    { label: "Điện ảnh - Âm nhạc - Hội họa", value: "I" },
    { label: "Y học - Sức khỏe", value: "Y" },
    { label: "Du lịch - Thể thao", value: "D" },
  ];

  return (
    <div className="menufilter">
      <div>
        <h4>Lọc hiện tại:</h4>
        <div>
          <label>Tiêu đề:</label>
          <input
            type="text"
            value={localTitle}
            onChange={(e) => setLocalTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Tác giả:</label>
          <input
            type="text"
            value={localAuthor}
            onChange={(e) => setLocalAuthor(e.target.value)}
          />
        </div>
        <div>
          <label>Loại sách:</label>
          <select
            value={localType}
            onChange={(e) => setLocalType(e.target.value)}
          >
            <option value="">Chọn loại sách</option>
            {typeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button onClick={clearFilters}>
            <RiRefreshLine/>
          </button>
          <button onClick={handleSearch}><CiSearch/></button>
        </div>
      </div>

      <div>
        <h4>Khoảng giá:</h4>
        <button onClick={() => handleFilterPrice(10, 20)}>10-20</button>
        <button onClick={() => handleFilterPrice(20, 30)}>20-30</button>
        <button onClick={() => handleFilterPrice(30, 40)}>30-40</button>
        <button onClick={() => handleFilterPrice(40, 50)}>40-50</button>
        <div>
          <label>Giá tối thiểu:</label>
          <input
            type="number"
            value={localMinPrice}
            onChange={(e) => setLocalMinPrice(Number(e.target.value))}
            min="0"
          />
        </div>
        <div>
          <label>Giá tối đa:</label>
          <input
            type="number"
            value={localMaxPrice}
            onChange={(e) => setLocalMaxPrice(Number(e.target.value))}
            min="0"
          />
        </div>
        <button onClick={() => handleFilterPrice(localMinPrice, localMaxPrice)}>
          Lọc
        </button>
      </div>

      <div className="filterSort">
        <h4 onClick={() => handleSort("price")}>Sắp xếp theo giá:</h4>
        {isSortByPrice === 1 ? (
          <FaArrowDown />
        ) : isSortByPrice === -1 ? (
          <FaArrowUp />
        ) : null}
        {isSortByPrice !== 0 ? (
          <p onClick={() => setIsSortByPrice(0)}>x</p>
        ) : null}
      </div>

      <div className="filterSort">
        <h4 onClick={() => handleSort("discount")}>
          Sắp xếp theo giảm giá:
        </h4>
        {isSortByDiscount === 1 ? (
          <FaArrowDown />
        ) : isSortByDiscount === -1 ? (
          <FaArrowUp />
        ) : null}
        {isSortByDiscount !== 0 ? (
          <p onClick={() => setIsSortByDiscount(0)}>x</p>
        ) : null}
      </div>

      <div className="filterSort">
        <h4 onClick={() => handleSort("rating")}>
          Sắp xếp theo đánh giá:
        </h4>
        {isSortByRating === 1 ? (
          <FaArrowDown />
        ) : isSortByRating === -1 ? (
          <FaArrowUp />
        ) : null}
        {isSortByRating !== 0 ? (
          <p onClick={() => setIsSortByRating(0)}>x</p>
        ) : null}
      </div>
    </div>
  );
}

export default MenuFilter;
