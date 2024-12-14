import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminProduct.css";

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    title: "",
    author: "",
    price: 0,
    imgSrc: "",
    type: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Lấy danh sách sản phẩm
  useEffect(() => {
    axios
      .get("http://localhost:3001/product")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy danh sách sản phẩm:", error);
        setError("Không thể tải danh sách sản phẩm.");
      });
  }, []);

  // Thêm sản phẩm mới
  const handleAddProduct = () => {
    axios
      .post("http://localhost:3001/product", newProduct)
      .then((response) => {
        setProducts([...products, response.data.data]);
        setNewProduct({ title: "", author: "", price: 0, imgSrc: "", type: "" });
        alert("Thêm sản phẩm mới thành công!");
      })
      .catch((error) => {
        console.error("Lỗi khi thêm sản phẩm:", error);
        alert("Thêm sản phẩm thất bại.");
      });
  };

  // Cập nhật sản phẩm
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

  // Xóa sản phẩm
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
        <input
          type="text"
          placeholder="Tên sản phẩm"
          value={newProduct.title}
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tác giả"
          value={newProduct.author}
          onChange={(e) => setNewProduct({ ...newProduct, author: e.target.value })}
        />
        <input
          type="number"
          placeholder="Giá"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Link hình ảnh"
          value={newProduct.imgSrc}
          onChange={(e) => setNewProduct({ ...newProduct, imgSrc: e.target.value })}
        />
        <input
          type="text"
          placeholder="Loại"
          value={newProduct.type}
          onChange={(e) => setNewProduct({ ...newProduct, type: e.target.value })}
        />
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
          <input
            type="text"
            placeholder="Tên sản phẩm"
            value={selectedProduct.title}
            onChange={(e) =>
              setSelectedProduct({ ...selectedProduct, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Tác giả"
            value={selectedProduct.author}
            onChange={(e) =>
              setSelectedProduct({ ...selectedProduct, author: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Giá"
            value={selectedProduct.price}
            onChange={(e) =>
              setSelectedProduct({ ...selectedProduct, price: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Link hình ảnh"
            value={selectedProduct.imgSrc}
            onChange={(e) =>
              setSelectedProduct({ ...selectedProduct, imgSrc: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Loại"
            value={selectedProduct.type}
            onChange={(e) =>
              setSelectedProduct({ ...selectedProduct, type: e.target.value })
            }
          />
          <button onClick={handleUpdateProduct}>Cập Nhật</button>
        </div>
      )}
    </div>
  );
};

export default AdminProduct;
