import React, { Component } from 'react';
import Header from './Header';
import Board from './Board';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header tagline="Test props" />
        <body>
          <Board />
        </body>
      </div>
    );
  }
}

export default App;
