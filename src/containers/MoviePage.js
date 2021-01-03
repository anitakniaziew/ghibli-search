import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MoviePageComponent from '../components/MoviePage';

const MoviePage = () => {
  const [ movie, setMovie ] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
      .then((res) => res.json())
      .then( data => setMovie(data))
      .catch((err) => console.log(err));
  }, [id]);

  return <MoviePageComponent movie={movie} />;
};

export default MoviePage;
