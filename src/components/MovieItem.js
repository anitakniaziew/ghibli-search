import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ title, id }) => {
  return (
    <div>
      <h2>                    
        <Link to={`/movies/${id}`}>{title}</Link>
      </h2>
      <div>Movie poster placeholder</div>
    </div>
  );
};

export default MovieItem;
