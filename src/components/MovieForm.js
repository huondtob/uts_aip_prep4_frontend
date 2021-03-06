import React, { Component } from 'react';

class MovieForm extends Component {
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
    const that = this;
    const url = 'http://localhost:3001';

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
    const url = 'http://localhost:3001'
    const that = this;

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
            onChange={this.handleInputChange}
            required
            placeholder="Enter a valid movie title" />
        </label>
        <br />
        <label>
          Release date:
          <input
            name="releaseDate"
            type="date"
            value={this.state.releaseDate}
            onChange={this.handleInputChange}
            required
            placeholder="Enter a valid release date"/>
        </label>
        <br />
        <label>
          Duration:
          <input
            name="duration"
            type="number"
            value={this.state.duration}
            onChange={this.handleInputChange}
            required
            placeholder="Enter a valid duration"/>
        </label>
        <br />
        <label>
          Genre:
          <input
            name="genre"
            type="text"
            value={this.state.genre}
            onChange={this.handleInputChange}
            required
            placeholder="Enter a valid genre"/>
        </label>
        <br />
        <label>
          Synopsis:
          <input
            name="synopsis"
            type="text"
            value={this.state.synopsis}
            onChange={this.handleInputChange}
            required
            placeholder="Enter a valid email synopsis"/>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default MovieForm;
