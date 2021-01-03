import React, { lazy, Suspense } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

const MovieList = lazy(() => import('./containers/MovieList'));
const MoviePage = lazy(() => import('./containers/MoviePage'));

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
    <Router>
      <div className="App">
      <Provider store={store}>
        <Suspense fallback={<div>LOADING</div>}>
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route path={`/movies/:id`} component={MoviePage} />
          </Switch>
        </Suspense>        
      </Provider>
      </div>
    </Router> 
  );
}

export default App;
