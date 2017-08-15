import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Module requires
var MovieList = require('./components/MovieList')

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            <b>This is a very serious project assignment.</b><br></br><br></br>
        </p>
        <MovieList />
      </div>
    );
  }
}

export default App;
