import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <li className="card">
        <h3 className="card-name">
          <span className="card-title">Detta är en card title</span>
        </h3>
        <p>Card description</p>
      </li>
    );
  }
}
