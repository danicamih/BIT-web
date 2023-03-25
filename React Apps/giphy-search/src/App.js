import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search from './components/GifSearch';

function App() {
  return (
    <>
      <header>
        <h1>Giphy search</h1>
      </header>
      <main>
        <Search />
      </main>
    </>
  );
}


export default App;
