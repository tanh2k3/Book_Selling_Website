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
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [title, setTitle] = useState("");

  const location = useLocation();

  const fetchData = async (body) => {
    const response = await axios.post(
      `http://localhost:3001/search/filter?limit=${limit}&offset=${offset}&title=${title}`,
      body
    );
    setBooks(response.data);
  };

  const handleLoadMore = async (body) => {
    let newOffset = offset + limit;
    setOffset(newOffset);    
    const response = await axios.post(
      `http://localhost:3001/search/filter?limit=${limit}&offset=${newOffset}&title=${title}`,
      body
    );
    setBooks([...books, ...response.data]);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    console.log(searchParams);
    setTitle(searchParams.get("title"));
    setOffset(searchParams.get("offset") || 0);
    setLimit(searchParams.get("limit") || 10);
    fetchData({});
  }, [window.location.search]);

  return (
    <div>
      <Header />
      <div className="listproductlayout">
      <div className="listproduct">
        {books.length > 0 ? (
          <>
            <MenuFilter data={books} setData={setBooks} onChange={() => {}} />
            <ViewData data={books}/>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <button className="btn btn-primary" id="btn_detail" onClick={() => handleLoadMore({})}>Xem thêm</button>
      </div>
      <Footer />
    </div>
  );
}

export default ListProduct;
