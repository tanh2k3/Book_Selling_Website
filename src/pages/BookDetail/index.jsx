import React, { useState } from 'react';
import './BookDetail.css';

const BookDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  const book = {
    title: "Giải mã Hoóc-môn Dopamine",
    author: "Anna Lembke",
    price: "119.800₫",
    originalPrice: "198.000₫",
    discount: "-39%",
    rating: 5.0,
    reviewsCount: 97,
    soldCount: "1k",
    imgSrc: "src/assets/hoocmon.jpg", // Replace with actual path to image
    features: [
      "Giải thích chi tiết về hoóc-môn dopamine và vai trò của nó trong cơ thể con người.",
      "Cung cấp thông tin về tác động của dopamine đến sức khỏe và tâm lý.",
      "Giải thích về mối quan hệ giữa lạc thú và nỗi đau, và cung cấp kiến thức để sống một cuộc sống đúng nghĩa.",
    ],
    similarBooks: [
      { title: "Giải mã Hoóc-môn Dopamine", imgSrc: "path_to_image1" },
      { title: "Mua 3 Giảm 5%", imgSrc: "path_to_image2" },
      { title: "IKIGAI", imgSrc: "path_to_image3" },
      { title: "Bí quyết sống lâu", imgSrc: "path_to_image4" },
    ],
  };

  return (
    <div className="book-detail-container">
      {/* Left Section */}
      <div className="book-info">
        <div className="book-gallery">
          <img src={book.imgSrc} alt={book.title} className="book-image" />
          <div className="thumbnail-gallery">
            {/* Add small images for a gallery */}
            <img src={book.imgSrc} alt={book.title} className="thumbnail" />
            <img src={book.imgSrc} alt={book.title} className="thumbnail" />
            {/* Add more thumbnails */}
          </div>
        </div>

        <div className="book-details">
          <h1>{book.title}</h1>
          <p className="book-author">Tác giả: {book.author}</p>
          <p className="book-price">
            <span className="discounted-price">{book.price}</span>
            <span className="original-price">{book.originalPrice}</span>
            <span className="discount">{book.discount}</span>
          </p>
          <p className="book-rating">
            {book.rating} <span>({book.reviewsCount} đánh giá) | Đã bán {book.soldCount}</span>
          </p>
          <div className="book-features">
            <h3>Đặc điểm nổi bật</h3>
            <ul>
              {book.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="book-purchase-info">
        <div className="purchase-container">
          <div className="quantity-selector">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>
          <p className="total-price">Tạm tính: {book.price}</p>
          <button className="buy-now">Mua ngay</button>
          <button className="add-to-cart">Thêm vào giỏ</button>
          <button className="buy-later">Mua trước trả sau</button>
        </div>

        <div className="shipping-info">
          <h3>Thông tin vận chuyển</h3>
          <p>Nhập địa chỉ của bạn để nhận thông tin vận chuyển chính xác.</p>
          <button>Nhập địa chỉ</button>
        </div>

        <div className="supplementary-services">
          <h3>Dịch vụ bổ sung</h3>
          <ul>
            <li>Ưu đãi đến 600k với thẻ TikiCard</li>
            <li>Mua trước trả sau</li>
          </ul>
        </div>
      </div>

      {/* Similar Products */}
      <div className="similar-products">
        <h3>Sản phẩm tương tự</h3>
        <div className="similar-books">
          {book.similarBooks.map((similarBook, index) => (
            <div key={index} className="similar-book-item">
              <img src={similarBook.imgSrc} alt={similarBook.title} />
              <p>{similarBook.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
