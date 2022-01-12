import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Modal from 'react-bootstrap/Modal';
import data from './data.json';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: 'unknown',
    }
  }

  handleModal = (name) => {
    const subject = data.filter(e => e.keyword === name)[0];

    this.setState({
      show: true,
      title: subject.title,
      description: subject.description
    })
  }

  closeModal = () => {
    this.setState({
      show: false
    })
  }

  render(){
    return (
      <>
        <Header />
        <Modal show={this.state.show} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.description}
          </Modal.Body>
        </Modal>
        <Main
          data={data}
          handleModal={this.handleModal}
        />
        <Footer />
      </>
    )
  }
}

export default App;
