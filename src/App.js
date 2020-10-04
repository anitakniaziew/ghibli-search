import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import MovieList from './containers/MovieList';

import './App.css';

const initialState = {
  movies: {
    isFetching: false,
    error: null,
    list: [],
  },
};

const store = createStore(moviesReducer, initialState);

function moviesReducer(state, action) {
  return state;
}

function App() {
  // async function getMovies() {
  //   const movies = await fetch('https://ghibliapi.herokuapp.com/films')
  //     .then((res) => res.json())
  //     .then((res) => res.results)
  //     .catch((err) => console.log(err));
  //   return movies;
  // }

  return (
    <div className="App">
      <Provider store={store}>
        <MovieList />
      </Provider>
    </div>
  );
}

export default App;
