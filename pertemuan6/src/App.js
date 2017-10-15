import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './komponen/Login';
import Tugas from './komponen/Tugas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dilo</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Tugas />
      </div>
    );
  }
}

export default App;
