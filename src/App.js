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
  if (action.type === 'FETCH_MOVIES') {
    return {
      ...state,
      movies: {
        ...state.movies,
        list: action.list,
      },
    };
  }
  return state;
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MovieList />
      </Provider>
    </div>
  );
}

export default App;
