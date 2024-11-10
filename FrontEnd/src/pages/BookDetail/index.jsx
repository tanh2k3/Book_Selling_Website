import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetail.css';

const BookDetail = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching book with ID:', id);
    fetch(`http://localhost:3001/api/books/${id}`)
      .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched book data:', data);
        setBook(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching book details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading book details...</p>;
  }

  if (!book) {
    return <p>No book details available. Please try again later.</p>;
  }

  return (
    <div className="book-detail">
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
  );
};

export default BookDetail;
