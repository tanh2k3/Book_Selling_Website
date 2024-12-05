import MenuFilter from "./MenuFilter";
import ViewData from "./ViewData";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import "./styles.css";

function ListProduct() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999999999);
  const [isSortByPrice, setIsSortByPrice] = useState(false);
  const [isSortByRating, setIsSortByRating] = useState(false);
  const [isSortByDiscount, setIsSortByDiscount] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const title = searchParams.get("title");
    const type = searchParams.get("type");
    setTitle(title || "");
    setType(type || "");
    console.log(title, type);
  }, [location.search]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.post(
          `http://localhost:3001/search/filter?page=${page}&limit=${limit}`,
          {
            title,
            type,
            minPrice,
            maxPrice,
            isSortByPrice,
            isSortByRating,
            isSortByDiscount,
          }
        );
        setBooks(data.products);
        setTotal(data.total);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [
    title,
    type,
    minPrice,
    maxPrice,
    isSortByPrice,
    isSortByRating,
    isSortByDiscount,
    page,
    limit,
  ]);

  return (
    <div>
      <Header />
      <div className="list_productlayout">
        <div className="list_product">
          {books.length > 0 ? (
            <>
              <MenuFilter
                books={books}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                setType={setType}
                setIsSortByPrice={setIsSortByPrice}
                setIsSortByRating={setIsSortByRating}
                setIsSortByDiscount={setIsSortByDiscount}
              />
              <ViewData
                books={books}
                total={total}
                page={page}
                setLimit={setLimit}
                setPage={setPage}
              />
            </>
          ) : (
            <p>Đang tải...</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ListProduct;
