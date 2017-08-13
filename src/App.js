import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      releaseDate: '',
      genre: '',
      duration: 0,
      synopsis: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    var that = this;
    var url = 'http://localhost:3001'

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        that.setState(data);
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    var url = 'http://localhost:3001'
    var that = this;

    event.preventDefault();
    fetch(url, {
      method: 'post',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(that.state)
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Release date:
          <input
            name="releaseDate"
            type="text"
            value={this.state.releaseDate}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Duration:
          <input
            name="duration"
            type="number"
            value={this.state.duration}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Genre:
          <input
            name="genre"
            type="text"
            value={this.state.genre}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Synopsis:
          <input
            name="synopsis"
            type="text"
            value={this.state.synopsis}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

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
        <Movie />
      </div>
    );
  }
}

export default App;
