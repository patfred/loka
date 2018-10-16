import React, { Component } from 'react';

export default class Card extends Component {
  state = {
    editing: false
  };

  addOrChangeCardDescription = (id, title) => {
    this.props.addOrChangeCardDescription(id, title);
    this.setState({ editing: false });
  };

  render() {
    const { editing } = this.state;

    return (
      <div className="card" draggable="true">
        <div className="card-title">
          <h3>Detta är en card title {this.props.id}</h3>
        </div>
        {editing ? (
          <input
            onBlur={e =>
              this.addOrChangeCardDescription(this.props.id, e.target.value)
            }
          />
        ) : (
          <p onClick={() => this.setState({ editing: true })}>
            {this.props.title}
          </p>
        )}
      </div>
    );
  }
}
