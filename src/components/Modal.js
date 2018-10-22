import React, { Component } from 'react';

export default class Modal extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal">
        {this.props.children}
        <div>
          <button
            onClick={e => {
              this.onClose(e);
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}
