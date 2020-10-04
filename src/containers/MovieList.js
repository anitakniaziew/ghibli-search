import React from 'react';
import { connect } from 'react-redux';

import MovieListComponent from '../components/MovieList';

const MovieList = ({ movies }) => {
  return <MovieListComponent movies={movies} />;
};

const mapStateToProps = (state) => ({
  movies: state.movies.list,
});

export default connect(mapStateToProps)(MovieList);
