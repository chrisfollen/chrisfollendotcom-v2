import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const testObj = {
    key1: 'thing',
    b: '789243',
    c: 'a longer string goes here then wut happens'
  };

  console.log('hello');

  console.log('things');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. will this eventually
          wrap around if this line gets long enough
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
