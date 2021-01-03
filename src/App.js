import React, { lazy, Suspense, useState } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import { ModeContext, modes } from './mode-context';

import ErrorBoundary from './components/ErrorBoundary';
import ModeToggleButton from './components/ModeToggleButton';

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
  const [ currentMode, setCurrentMode ] = useState(modes.light);

  const toggleMode = () => {
    setCurrentMode(currentMode === modes.light ? 
      modes.dark : 
      modes.light)
  }

  return (
    <Router>
      <ModeContext.Provider mode={currentMode}>
        <div className="App" style={{backgroundColor: currentMode.background, color: currentMode.textColor}}>
          <ModeToggleButton toggleMode={toggleMode} currentMode={currentMode}/>
          <Provider store={store}>
            <ErrorBoundary>
              <Suspense fallback={<div>LOADING</div>}>
                <Switch>
                  <Route exact path="/" component={MovieList} />
                  <Route path={`/movies/:id`} component={MoviePage} />
                </Switch>
              </Suspense>
            </ErrorBoundary>
          </Provider>
        </div>
      </ModeContext.Provider>
    </Router> 
  );
}

export default App;
