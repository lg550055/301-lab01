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
    const subject = data.filter(e => e.title === name)[0];

    this.setState({
      show: true,
      title: subject.title,
      description: subject.description,
      pic: subject.image_url,
      horns: subject.horns
    })
  }

  closeModal = () => {
    this.setState({ show: false })
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
            <img src={this.state.pic} alt={this.state.title}/>
            <p>{this.state.description}</p>
            <p>Horns: {this.state.horns}</p>
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
