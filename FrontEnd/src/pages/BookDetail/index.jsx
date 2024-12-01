import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BookDetail.css";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [feedbackList, setFeedbackList] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [stars, setStars] = useState(0);

  useEffect(() => {
    // Fetch book details
    fetch(`http://localhost:3001/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
        setLoading(false);
      });

    // Fetch feedbacks for this book
    fetch(`http://localhost:3001/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => setFeedbackList(data))
      .catch((error) => console.error("Error fetching feedbacks:", error));
  }, [id]);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() === "" || stars < 1) return;

    fetch(`http://localhost:3001/feedback/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: feedback, stars }),
    })
      .then((response) => response.json())
      .then((data) => {
        setFeedbackList([data.feedback, ...feedbackList]);
        setFeedback("");
        setStars(0);
      })
      .catch((error) => console.error("Error submitting feedback:", error));
  };

  if (loading) {
    return <p>Loading book details...</p>;
  }

  if (!book) {
    return <p>No book details available. Please try again later.</p>;
  }

  return (
    <div className="book-detail-container">
      {/* Book Details Section */}
      <div className="book-detail">
        <div className="book-detail-left">
          <h1 className="book-title">{book.title}</h1>
          <img src={book.imgSrc} alt={book.title} className="main-image" />
          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="add-to-cart">Thêm vào giỏ hàng</button>
            <button className="buy-now">Mua ngay</button>
          </div>
        </div>

        {/* Book Information Table */}
        <div className="book-detail-right">
          <table className="book-details-table">
            <tbody>
              <tr>
                <td>Author</td>
                <td>{book.author}</td>
              </tr>
              <tr>
                <td>Translator</td>
                <td>{book.translator || "N/A"}</td>
              </tr>
              <tr>
                <td>SKU</td>
                <td>{book.sku || "N/A"}</td>
              </tr>
              <tr>
                <td>Publisher</td>
                <td>{book.publisher || "N/A"}</td>
              </tr>
              <tr>
                <td>Publication Year</td>
                <td>{book.publicationYear || "N/A"}</td>
              </tr>
              <tr>
                <td>Language</td>
                <td>{book.language || "N/A"}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{book.weight || "N/A"}</td>
              </tr>
              <tr>
                <td>Dimensions</td>
                <td>{book.dimensions || "N/A"}</td>
              </tr>
              <tr>
                <td>Pages</td>
                <td>{book.pages || "N/A"}</td>
              </tr>
              <tr>
                <td>Binding</td>
                <td>{book.binding || "N/A"}</td>
              </tr>
            </tbody>
          </table>
          <h3>Thông tin cuốn sách</h3>
          <p className="book-description">
            {book.description || "No description available for this book."}
          </p>
        </div>
      </div>

      <div className="similar-books-section">
        <h3>Có thể bạn thích </h3>
        <div className="similar-books-container">
          {book.similarBooks.slice(0, 8).map((similarBook, index) => (
            <div key={index} className="similar-book-card">
              <img src={similarBook.imgSrc} alt={similarBook.title} />
              <p>{similarBook.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="feedback-section">
        <h3>Đánh giá của độc giả</h3>
        <ul className="feedback-list">
          {feedbackList.map((feedback, index) => (
            <li key={index} className="feedback-item">
              <p className="feedback-stars">
                {Array.from({ length: feedback.stars }, (_, i) => (
                  <span key={i} className="star filled">★</span>
                ))}
                {Array.from({ length: 5 - feedback.stars }, (_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </p>
              <p>{feedback.content}</p>
              <small className="feedback-time">
                {new Date(feedback.timestamp).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>

        <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
          <h4>Hãy đánh giá để giúp những độc giả khác lựa chọn được cuốn sách phù hợp nhất!</h4>
          <div className="rating-input">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${stars >= star ? "filled" : ""}`}
                onClick={() => setStars(star)}
              >
                ★
              </span>
            ))}
          </div>
          <textarea
            placeholder="Viết bình luận của bạn tại đây..."
            rows="4"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button type="submit">Gửi</button>
        </form>
      </div>
    </div>
  );
};

export default BookDetail;
