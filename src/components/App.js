import React, { Component } from 'react';
import Header from './Header';
import CardContainer from './CardContainer';
import '../css/App.scss';

class App extends Component {
  state = {
    cardContainers: [{ title: 'Add new title', id: 1 }],
    cards: []
  };

  renderCardContainers = containerArray => {
    return containerArray.map(container => (
      <CardContainer
        key={container.id}
        title={container.title}
        id={container.id}
        addNewCardContainer={this.addNewCardContainer}
        addNewCard={this.addNewCard}
        cards={this.state.cards}
        updateCard={this.updateCard}
      />
    ));
  };

  addNewCardContainer = () => {
    const cardContainers = [...this.state.cardContainers];
    const newContainer = {
      id: cardContainers.length + 1,
      title: 'Add new title'
    };
    cardContainers.push(newContainer);
    this.setState({ cardContainers });
  };

  addNewCard = containerId => {
    const cards = [...this.state.cards];
    const newCard = {
      id: cards.length + 1,
      title: '',
      description: 'Add description...',
      containerId: containerId
    };
    cards.push(newCard);
    this.setState({ cards });
  };

  updateCard = cardToUpdate => {
    const cards = this.state.cards.map(card => {
      if (card.id === cardToUpdate.id) {
        return {
          ...cardToUpdate
        };
      } else {
        return card;
      }
    });
    this.setState({ cards });
  };

  /* updateStateWithInput = (id, description) => {
    const cards = this.state.cards.map(card => {
      if (card.id === id) {
        return {
          ...card,
          description
        };
      } else {
        return card;
      }
    });
    this.setState({ cards });
  }; */

  render() {
    return (
      <div className="App">
        {/* <Header tagline="Test props" /> */}
        {this.renderCardContainers(this.state.cardContainers)}
      </div>
    );
  }
}

export default App;
