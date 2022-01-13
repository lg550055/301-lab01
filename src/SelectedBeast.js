import React from 'react';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {
  render () {
    return (
      <Modal show={this.props.beast.show} onHide={this.props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.beast.pic} alt={this.props.beast.title}/>
          <p>{this.props.beast.description}</p>
          <p>Horns: {this.props.beast.horns}</p>
        </Modal.Body>
      </Modal>
    );
  }
}

export default SelectedBeast;