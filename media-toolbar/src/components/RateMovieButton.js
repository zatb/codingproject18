import React, { useState, useEffect } from 'react';
import './RateMovieButton.css';

const RateMovieButton = ({ movie }) => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setRating(0);
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
      <button onClick={handleSubmit} className="submit-button">Submit Rating</button>
      {submitted && <p className="black-text">Rating submitted!</p>}
    </div>
  );
};

export default RateMovieButton;
