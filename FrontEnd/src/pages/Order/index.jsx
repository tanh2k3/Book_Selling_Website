import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./styles.css";

const Order = () => {
  const [books, setBooks] = useState([]);
  const [ids, setIds] = useState([]);
  const [listorder, setListorder] = useState([]);
  const [total, setTotal] = useState(0);

  const location = useLocation();

  const fetchData = async (idParams) => {
    const result = [];
    const listid = [];
    for (let i = 0; i < idParams.length; i++) {
      try {
        const response = await axios.get(
          `http://localhost:3001/product/${idParams[i]}`
        );
        console.log(response.data); // Log the response data to check its structure
        result.push(response.data);
        listid.push({ id: response.data._id, quantity: 1, checked: true });
      } catch (error) {
        console.error(`Error fetching product with ID ${idParams[i]}:`, error);
      }
    }
    setListorder(listid);
    setBooks(result);
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      // Get IDs from query parameter
      const searchParams = new URLSearchParams(location.search);
      const idString = searchParams.get("ids");
      console.log(idString);
      if (idString) {
        const idParams = idString.split("-"); // Split by '-'
        setIds(idParams);
        await fetchData(idParams);
      }
    };

    fetchDataAsync();
  }, [location.search]);

  useEffect(() => {
    const calculateTotal = () => {
      const totalAmount = listorder.reduce((acc, item) => {
        const book = books.find((book) => book._id === item.id);
        return acc + (book ? book.price * item.quantity : 0);
      }, 0);
      setTotal(totalAmount);
    };

    calculateTotal();
  }, [listorder, books]);

  const handleOrder = async () => {
    const orderData = listorder
      .filter((item) => item.checked)
      .map((item) => ({
        id: item.id,
        quantity: item.quantity,
      }));

    console.log(orderData);
  };

  return (
    <>
      <Header />
      <div>
        <div className="listproductlayout">
        <h1>Order Details</h1>
          <div className="listproduct">
            {books.length > 0 ? (
              books.map((book) => (
                <div key={book._id}>
                  <h2 className="name_book">Tên sách: {book.title}</h2>
                  <img src={book.imgSrc} alt={book.title} />
                  <p className="author_book">Tác giả: {book.author}</p>
                  <p className="price_book">Giá: {book.price}</p>
                  <label htmlFor={`quantity-${book._id}`}>Số lượng:</label>
                  <input
                    type="number"
                    id={`quantity-${book._id}`}
                    name="quantity"
                    min="1"
                    max="10"
                    value={
                      listorder.find((item) => item.id === book._id)?.quantity ||
                      1
                    }
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value, 10);
                      setListorder((prev) =>
                        prev.map((item) =>
                          item.id === book._id
                            ? { ...item, quantity: newQuantity }
                            : item
                        )
                      );
                    }}
                  />
                  <input type="hidden" name="id" value={book._id} />
                  <input type="hidden" name="price" value={book.price} />
                  <input
                    type="checkbox"
                    name="checked"
                    checked={
                      listorder.find((item) => item.id === book._id)?.checked ||
                      false
                    }
                    onChange={(e) => {
                      const newChecked = e.target.checked;
                      setListorder((prev) =>
                        prev.map((item) =>
                          item.id === book._id
                            ? { ...item, checked: newChecked }
                            : item
                        )
                      );
                    }}
                  />
                </div>
              ))
            ) : (
              <p>No books found</p>
            )}
          </div>
          <div className="total">Tổng tiền: {total}</div>
          <button
            className="btn btn-primary"
            id="btn_detail"
            onClick={handleOrder}
          >
            Đặt hàng
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Order;