import React, { Component } from 'react';
import './App.css';
import Todo from './TodoList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: [],
      totalItems: 0
    };
  }

  // When text box is clicked
  onChange = (event) => {
    this.setState({ text: event.target.value });
  }

  // When submit button is clicked
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      text: '',
      items: [...this.state.items, this.state.text],
      // Updates total 
      totalItems: this.state.totalItems+1
    });

  }

  render() {
    return (
      <div className="lab">
        <header>
          <h1>Lab 7 - <i>React</i></h1>
          <h3>Total Todo Items: {this.state.totalItems}</h3>
        </header>
        <form onSubmit={this.onSubmit}>
          <input placeholder="Add item to list..." value={this.state.text} onChange={this.onChange}/>
          <button>Submit</button>
        </form>
        <Todo items={this.state.items} /><br/>
        <footer>
          <a href="https://github.com/mase4506/React-Lab7.git">- Source Code -</a>
        </footer>
      </div>
    );
  }
}