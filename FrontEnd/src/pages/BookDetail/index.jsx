import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StarRating from "./StarRating";
import "./BookDetail.css";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState('');
  const [stars, setStars] = useState(0);
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
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

    fetch(`http://localhost:3001/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => setFeedbackList(data))
      .catch((error) => console.error("Error fetching feedbacks:", error));
  }, [id]);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() === '' || stars < 1) {
      alert('Please provide a valid feedback and star rating.');
      return;
    }

    fetch(`http://localhost:3001/feedback/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: feedback, stars }),
    })
      .then((response) => response.json())
      .then((data) => {
        setFeedbackList([data.feedback, ...feedbackList]);
        setFeedback('');
        setStars(0);
      })
      .catch((error) => console.error('Error submitting feedback:', error));
  };

  const handleDeleteFeedback = (feedbackId) => {
    fetch(`http://localhost:3001/feedback/${feedbackId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete feedback');
        }
        setFeedbackList(feedbackList.filter((item) => item._id !== feedbackId));
      })
      .catch((error) => console.error('Error deleting feedback:', error));
  };

  if (loading) {
    return <p>Loading book details...</p>;
  }

  if (!book) {
    return <p>No book details available. Please try again later.</p>;
  }

  return (
    <div className="book-detail-container">
      <div className="book-detail-left">
        <h1>{book.title}</h1>
        <img src={book.imgSrc} alt={book.title} />
        <p>Author: {book.author}</p>
        <p>Price: {book.price}</p>
        <p>Rating: {book.rating} / 5</p>
        <p>Sold: {book.soldCount}</p>
        <h3>Features:</h3>
        <ul>
          {book.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <h3>Similar Books:</h3>
        <div className="similar-books">
          {book.similarBooks.map((similarBook, index) => (
            <div key={index}>
              <img src={similarBook.imgSrc} alt={similarBook.title} />
              <p>{similarBook.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="book-detail-right">
        <h3>Leave Your Feedback:</h3>
        <form onSubmit={handleFeedbackSubmit}>
          <StarRating rating={stars} onRatingChange={setStars} />
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your feedback here..."
            rows="4"
          />
          <button type="submit">Submit</button>
        </form>

        <h3>Feedbacks:</h3>
        <ul className="feedback-list">
          {feedbackList.map((item) => (
            <li key={item._id} className="feedback-item">
              <div className="feedback-content">
                <div>
                  <p className="feedback-stars">
                    {Array.from({ length: item.stars }, (_, i) => (
                      <span key={i} className="star filled">★</span>
                    ))}
                    {Array.from({ length: 5 - item.stars }, (_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </p>
                  <p>{item.content}</p>
                  <small className="feedback-time">
                    {new Date(item.timestamp).toLocaleString()}
                  </small>
                </div>
                <button
                  onClick={() => handleDeleteFeedback(item._id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookDetail;
