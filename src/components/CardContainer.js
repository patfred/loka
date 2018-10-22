import React, { Component } from 'react';
import Card from './Card';
import posed from 'react-pose';

export default class CardContainer extends Component {
  renderCards = cardArray => {
    const cardBelongsToContainer = cardArray.filter(
      cardArray => cardArray.containerId === this.props.id
    );
    return cardBelongsToContainer.map(card => (
      <Card
        key={card.id}
        title={card.title}
        id={card.id}
        description={card.description}
        containerId={this.props.id}
        updateCard={this.props.updateCard}
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
          </div>
          {this.renderCards(this.props.cards)}
          <button onClick={() => this.props.addNewCard(this.props.id)}>
            Add new task...
          </button>
        </div>
      </div>
    );
  }
}
