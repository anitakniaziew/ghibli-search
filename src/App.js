import React from 'react';

import MovieList from './components/MovieList';

import './App.css';

const MoviesData = [
  {
    title: 'Laputa',
  },
  {
    title: 'Mononoke Hime',
  },
  {
    title: 'Porco Rosso',
  },
];

function App() {
  return (
    <div className="App">
      <MovieList movies={MoviesData} />
    </div>
  );
}

export default App;
