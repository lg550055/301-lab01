import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
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
        <SelectedBeast
          beast={this.state}
          closeModal={this.closeModal}
        />
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
