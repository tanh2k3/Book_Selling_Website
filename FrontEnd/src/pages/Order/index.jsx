import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./styles.css";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Order = () => {

  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState("cod");

  // Lấy dữ liệu sách khi đơn hàng của người dùng thay đổi
  useEffect(() => {
    if (user?.order?.products?.length > 0) {
      const ids = user.order.products.map((item) => item.id);

      const fetchBooks = async () => {
        try {
          const res = await axios.post(
            "http://localhost:3001/product/list",
            { ids },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setBook(res.data);
        } catch (error) {
          console.error("Lỗi khi lấy danh sách sách:", error);
        }
      };

      fetchBooks();
    }
  }, [user]);

  // Cập nhật trạng thái loading khi đã lấy được dữ liệu sách
  useEffect(() => {
    if (book.length === user?.order?.products?.length) {
      setLoading(false);
    }
  }, [book, user?.order?.products?.length]);

  const formatTitle = (title) => {
    if (title.length > 30) {
      return title.slice(0, 30) + "...";
    }
    return title;
  };

  const formatMoney = (money) => {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };

  const handleIncreaseQuantity = (index) => {
    const updatedProducts = [...user.order.products];
    updatedProducts[index].quantity += 1;
    setUser({ ...user, order: { ...user.order, products: updatedProducts } });
  };

  const handleDecreaseQuantity = (index) => {
    const updatedProducts = [...user.order.products];
    if (updatedProducts[index].quantity > 1) {
      updatedProducts[index].quantity -= 1;
      setUser({ ...user, order: { ...user.order, products: updatedProducts } });
    }
  };

  const handleDelete = (index) => {
    const updatedProducts = [...user.order.products];
    updatedProducts.splice(index, 1);
    setUser({ ...user, order: { ...user.order, products: updatedProducts } });
  };

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  // Sử dụng giá trị mặc định từ context người dùng
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState(user?.address || "");
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [type, setType] = useState("cod");

  const handleBuy = async () => {
    const jwt = localStorage.getItem("token");
    if (!jwt) {
      alert("Vui lòng đăng nhập để đặt hàng!");
      return;
    }
    if (name.trim()===""){
      alert("Vui lòng nhập tên!");
      return;
    }
    if (email.trim()===""){
      alert("Vui lòng nhập email!");
      return;
    }
    if (phone.trim()===""){
      alert("Vui lòng nhập số điện thoại!");
      return;
    }
    if (address.trim()===""){
      alert("Vui lòng nhập địa chỉ!");
      return;
    }
    const orderData = {
      userId: user._id,
      name: name,
      phone: phone,
      email: email,
      address: address,
      type: selectedPayment,
      products: user.order.products.map((product, index) => ({
        productId: product.id,
        quantity: product.quantity,
      })),
      total: user.order.products.reduce(
        (total, item, index) => total + item.quantity * book[index].price,
        0
      ),
      discount: user.order.products.reduce(
        (total, item, index) =>
          total +
          (item.quantity * book[index].price * book[index].discount) / 100,
        0
      ),
    };

    try {
      const res = await axios.post("http://localhost:3001/order", orderData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });
      if (res.status === 201) {
        alert("Đặt hàng thành công!");
        setUser({ ...user, order: { products: [] } });
        if (selectedPayment === "online") {
          // Chuyển hướng sang trang thanh toán
          navigate(`/payment/${res.data._id}`);
        }
        else {
          navigate("/profile");
        }
      }
    } catch (error) {
      console.error("Lỗi khi đặt hàng:", error);
      alert("Đặt hàng thất bại!");
    }
  };

  return (
    <>
      <Header />
      {loading ? (
        <h2>Đang tải...</h2>
      ) : book.length === 0 ? (
        <h2>Không có đơn hàng nào</h2>
      ) : (
        <div className="order-body">
          <div className="order-layout">
            <div className="order-details">
              {book.map((item, index) => (
                <div key={index} className="order-item">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="order-item-image"
                  />
                  <div>
                    <h3>{formatTitle(item.title)}</h3>
                    <p>Giá: {formatMoney(item.price)} VND</p>
                    <p>
                      <button onClick={() => handleDecreaseQuantity(index)}>
                        -
                      </button>
                      {user.order.products[index].quantity}
                      <button onClick={() => handleIncreaseQuantity(index)}>
                        +
                      </button>
                    </p>
                    <p>Giảm giá: {item.discount}%</p>
                    <button onClick={() => handleDelete(index)}>Xóa</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="user-info">
              <h2>Thông tin người dùng</h2>
              <p>Tên: </p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="user-info-input"
                required
              />
              <p>Email: </p>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="user-info-input"
                required
              />
              <p>Số điện thoại: </p>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="user-info-input"
                required
              />
              <p>Địa chỉ: </p>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="user-info-input"
                required
              />
              <div className="payment-method">
                <h3>Phương thức thanh toán</h3>
                <input
                  type="radio"
                  id="cod"
                  name="payment"
                  value="cod"
                  checked={selectedPayment === "cod"}
                  onChange={handlePaymentChange}
                />{" "}
                Thanh toán khi nhận hàng
                <input
                  type="radio"
                  id="online"
                  name="payment"
                  value="online"
                  checked={selectedPayment === "online"}
                  onChange={handlePaymentChange}
                />{" "}
                Online
              </div>
            </div>
          </div>
          <div className="order-summary">
            <div>
              <h2>Tóm tắt đơn hàng</h2>
              <p>Tổng số sản phẩm: {user.order.products.length}</p>
              <p>
                Tổng giá trị:{" "}
                {formatMoney(
                  user.order.products.reduce(
                    (total, item, index) =>
                      total + item.quantity * book[index].price,
                    0
                  )
                )}{" "}
                VND
              </p>
            </div>
            <button onClick={handleBuy}>Đặt hàng</button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Order;
