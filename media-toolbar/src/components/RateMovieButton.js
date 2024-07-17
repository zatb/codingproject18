import React, { useState, useEffect } from 'react';

const RateMovieButton = ({ movie }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  useEffect(() => {
    setSubmitted(false);
  }, [movie]);

  return (
    <div className="rate-movie-container">
      <h3 className="rate-movie-title">Rate {movie.title}</h3>
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRating(star)}
            style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default RateMovieButton;
