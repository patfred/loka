import React, { Component } from 'react';
import Card from './Card';

export default class Board extends Component {
  render() {
    return (
      <span className="board-column">
        <Card />
      </span>
    );
  }
}
