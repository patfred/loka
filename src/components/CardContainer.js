import React, { Component } from 'react';
import Card from './Card';

export default class CardContainer extends Component {
  renderCards = cardArray => {
    return cardArray.map(card => (
      <Card
        key={card.id}
        title={card.title}
        id={card.id}
        containerId={this.props.id}
        addOrChangeCardDescription={this.props.addOrChangeCardDescription}
      />
    ));
  };

  render() {
    return (
      <div className="board-wrapper">
        <div className="board-column">
          <div className="board-title">
            <h2>Board title {this.props.id}</h2>
            <button onClick={this.props.addNewCardContainer}>
              Add new container
            </button>
            <button onClick={() => this.props.addNewCard(this.props.id)}>
              Add new card
            </button>
          </div>
          {this.renderCards(this.props.cards)}
        </div>
      </div>
    );
  }
}
