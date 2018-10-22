import React, { Component } from 'react';
import Card from './Card';

export default class CardContainer extends Component {
  state = {
    editing: false
  };
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
        updateCardTitleAndOrDescription={
          this.props.updateCardTitleAndOrDescription
        }
      />
    ));
  };

  editContainerDescription = (id, title) => {
    this.props.editContainerDescription(id, title);
    this.setState({ editing: false });
  };

  onDragOver = e => {
    e.preventDefault();
  };

  onDrop = (e, containerId) => {
    let id = e.dataTransfer.getData('id');

    let cards = this.props.cards.filter(card => {
      if (card.id == id) {
        card.category = containerId;
      }
      return card;
    });

    this.setState({
      ...this.props.state,
      cards
    });
  };

  render() {
    const { editing } = this.state;
    return (
      <div className="board-wrapper">
        <div
          className="board-column"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => {
            this.onDrop(e, this.props.id);
          }}
        >
          <div className="board-title">
            {editing ? (
              <input
                placeholder="Add title..."
                required
                onBlur={e =>
                  this.editContainerDescription(this.props.id, e.target.value)
                }
              />
            ) : (
              <h2 onClick={() => this.setState({ editing: true })}>
                {this.props.title}
              </h2>
            )}
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
