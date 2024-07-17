import React, { useState } from 'react';
import './styles/Toolbar.css';
import RateMovieButton from './components/RateMovieButton';
import MovieSelector from './components/MovieSelector';
import UploadButton from './components/UploadButton';

const Toolbar = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="toolbar">
      <MovieSelector onSelectMovie={setSelectedMovie} />
      {selectedMovie && <RateMovieButton movie={selectedMovie} />}
      <UploadButton />
    </div>
  );
};

export default Toolbar;
