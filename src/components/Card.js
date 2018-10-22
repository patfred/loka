import React, { Component } from 'react';
import Modal from './Modal';

export default class Card extends Component {
  titleRef = React.createRef();
  descRef = React.createRef();

  state = { show: false, draggable: true };

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
      draggable: !this.state.draggable
    });
  };

  hideModal = () => {
    this.setState({ show: false });
    this.setState({ draggable: false });
  };

  editCardTitleAndOrDescription = e => {
    e.preventDefault();
    const card = {
      id: this.props.id,
      title: this.titleRef.current.value,
      description: this.descRef.current.value,
      containerId: this.props.containerId
    };
    this.props.updateCardTitleAndOrDescription(card);
  };

  onDragStart = (ev, id) => {
    console.log('dragstart:', id);
    ev.dataTransfer.setData('id', id);
  };

  render() {
    const haveTitle = this.props.title;
    return (
      <div
        className="card"
        onClose={this.showModal}
        draggable={this.state.draggable}
        onDragStart={e => this.onDragStart(e, this.props.id)}
      >
        {haveTitle && <h3>{this.props.title}</h3>}
        <p onClick={this.showModal}>{this.props.description}</p>

        <Modal onClose={this.showModal} show={this.state.show}>
          <form onSubmit={this.editCardTitleAndOrDescription}>
            <div className="editCardHeader">
              <input
                required
                type="text"
                name="title"
                placeholder="Add title"
                ref={this.titleRef}
              />
            </div>
            <textarea
              name="desc"
              placeholder="Add description"
              ref={this.descRef}
            />
            <button type="submit">Save</button>
          </form>
        </Modal>
      </div>
    );
  }
}
