import React, { useState } from 'react';

const MovieSelector = ({ onSelectMovie }) => {
  const movies = [
    { id: 1, title: 'Oppenheimer' },
    { id: 2, title: 'The Godfather' },
    { id: 3, title: 'Apocalypse Now' }
  ];

  const handleChange = (event) => {
    const selectedMovie = movies.find(movie => movie.id === parseInt(event.target.value));
    onSelectMovie(selectedMovie);
  };

  return (
    <select onChange={handleChange}>
      <option value="">Select a movie</option>
      {movies.map(movie => (
        <option key={movie.id} value={movie.id}>{movie.title}</option>
      ))}
    </select>
  );
};

export default MovieSelector;
