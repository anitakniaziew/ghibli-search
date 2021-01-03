import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import MovieListComponent from '../components/MovieList';

const FETCH_MOVIES = 'FETCH_MOVIES';

const setMovieList = (response) => ({
  type: FETCH_MOVIES,
  list: response,
});

const MovieList = ({ movies, dispatch }) => {
  useEffect(() => {
    if (movies.length === 0) {
      fetch('https://ghibliapi.herokuapp.com/films')
        .then((res) => res.json())
        .then((res) => dispatch(setMovieList(res)))
        .catch((err) => console.log(err));
    }
  });
  return <MovieListComponent movies={movies} />;
};

const mapStateToProps = (state) => ({
  movies: state.movies.list,
});

export default connect(mapStateToProps)(MovieList);
