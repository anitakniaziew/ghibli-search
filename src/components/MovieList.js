import React from 'react';

import MovieItem from './MovieItem';

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieItem title={movie.title} key={movie.title} />
      ))}
    </div>
  );
};

export default MovieList;
