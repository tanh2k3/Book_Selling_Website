import React, { useState, useEffect } from 'react';
import './ProductsList.css';
import CardItem from '../../../components/CardItem';

const ProductsList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="products-container">
      {books.length > 0 ? (
        books.map((book, index) => (
          <CardItem key={index} item={book} />
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default ProductsList;
