import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminProduct.css";

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    imgSrc: "",
    title: "",
    author: "",
    translator: "",
    price: 0,
    originalPrice: 0,
    discount: 0,
    rating: 0,
    reviewsCount: 0,
    soldCount: 0,
    features: [],
    similarBooks: [],
    sku: "",
    ageGroup: "",
    supplier: "",
    publisher: "",
    publicationYear: "",
    language: "",
    weight: "",
    dimensions: "",
    pages: 0,
    binding: "",
    description: "",
    type: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch all products
  useEffect(() => {
    axios
      .get("http://localhost:3001/product")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Không thể tải danh sách sản phẩm.");
      });
  }, []);

  // Add a new product
  const handleAddProduct = () => {
    axios
      .post("http://localhost:3001/product", newProduct)
      .then((response) => {
        setProducts([...products, response.data.data]);
        setNewProduct({
          imgSrc: "",
          title: "",
          author: "",
          translator: "",
          price: 0,
          originalPrice: 0,
          discount: 0,
          rating: 0,
          reviewsCount: 0,
          soldCount: 0,
          features: [],
          similarBooks: [],
          sku: "",
          ageGroup: "",
          supplier: "",
          publisher: "",
          publicationYear: "",
          language: "",
          weight: "",
          dimensions: "",
          pages: 0,
          binding: "",
          description: "",
          type: "",
        });
        alert("Thêm sản phẩm mới thành công!");
      })
      .catch((error) => {
        console.error("Lỗi khi thêm sản phẩm:", error);
        alert("Thêm sản phẩm thất bại.");
      });
  };

  // Update an existing product
  const handleUpdateProduct = () => {
    if (!selectedProduct) return;
    axios
      .put(`http://localhost:3001/product/${selectedProduct._id}`, selectedProduct)
      .then((response) => {
        const updatedProducts = products.map((product) =>
          product._id === selectedProduct._id ? response.data.data : product
        );
        setProducts(updatedProducts);
        setSelectedProduct(null);
        alert("Cập nhật sản phẩm thành công!");
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật sản phẩm:", error);
        alert("Cập nhật sản phẩm thất bại.");
      });
  };

  // Delete a product
  const handleDeleteProduct = (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) return;
    axios
      .delete(`http://localhost:3001/product/${id}`)
      .then(() => {
        setProducts(products.filter((product) => product._id !== id));
        alert("Xóa sản phẩm thành công!");
      })
      .catch((error) => {
        console.error("Lỗi khi xóa sản phẩm:", error);
        alert("Xóa sản phẩm thất bại.");
      });
  };

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="admin-product-container">
      <h1>Quản Lý Sản Phẩm</h1>
      <div className="admin-product-actions">
        <h2>Thêm Sản Phẩm Mới</h2>
        {Object.keys(newProduct).map((key) => (
          <div key={key}>
            <label>{key}</label>
            <input
              type={typeof newProduct[key] === "number" ? "number" : "text"}
              placeholder={key}
              value={newProduct[key]}
              onChange={(e) =>
                setNewProduct({ ...newProduct, [key]: e.target.value })
              }
            />
          </div>
        ))}
        <button onClick={handleAddProduct}>Thêm Sản Phẩm</button>
      </div>

      <div className="admin-product-list">
        <h2>Danh Sách Sản Phẩm</h2>
        <table>
          <thead>
            <tr>
              <th>Tên Sản Phẩm</th>
              <th>Tác Giả</th>
              <th>Giá</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.title}</td>
                <td>{product.author}</td>
                <td>{product.price.toLocaleString()} VND</td>
                <td>
                  <button onClick={() => setSelectedProduct(product)}>Sửa</button>
                  <button onClick={() => handleDeleteProduct(product._id)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedProduct && (
        <div className="admin-product-edit">
          <h2>Sửa Sản Phẩm</h2>
          {Object.keys(selectedProduct).map((key) => (
            <div key={key}>
              <label>{key}</label>
              <input
                type={typeof selectedProduct[key] === "number" ? "number" : "text"}
                placeholder={key}
                value={selectedProduct[key]}
                onChange={(e) =>
                  setSelectedProduct({ ...selectedProduct, [key]: e.target.value })
                }
              />
            </div>
          ))}
          <button onClick={handleUpdateProduct}>Cập Nhật</button>
        </div>
      )}
    </div>
  );
};

export default AdminProduct;
