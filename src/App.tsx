import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import * as Colyseus from 'colyseus.js'

function App() {
  const client = new Colyseus.Client("ws://localhost:3000");
  
  client.joinOrCreate("MyRoom")
  .then(async (room) => {

  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <span className="text-white text-4xl text-bold ">Global Checker</span>
      </header>
    </div>
  );
}

export default App;
