import React, { Component } from 'react';
import TodoApp from './ToDoApp'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://www.styled-components.com/static/logo.png" className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://www.styled-components.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Styled Components
          </a>
        </header>
        <TodoApp />
      </div>
    );
  }
}

export default App;
