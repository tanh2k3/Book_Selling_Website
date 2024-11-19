import React, { useState } from 'react';
import './StarRating.css';

const StarRating = ({ rating, onRatingChange }) => {
  const [hoveredStar, setHoveredStar] = useState(0);

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= (hoveredStar || rating) ? 'filled' : ''}`}
          onClick={() => onRatingChange(star)}
          onMouseEnter={() => setHoveredStar(star)}
          onMouseLeave={() => setHoveredStar(0)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
