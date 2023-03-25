import React from 'react';
import Search from './components/Search';
import UICard from './components/UICard';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hero Team
      </header>

      <main>
      <Search />
      <UICard />
      </main>

      <footer></footer>
          </div>
  );
}

export default App;
