import React from 'react';
import HornedBeast from './HornedBeast.js';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      horns: 0
    }
  }

  handleFilter = (e) => {
    this.setState({ horns: e.target.value})
  }

  render () {
    let beastArray = this.props.data.map((e, i) => {
      if(e.horns > this.state.horns) {
        return (
          <HornedBeast
            title={e.title}
            image_url={e.image_url}
            description={e.description}
            key={i}
            handleModal={this.props.handleModal}
          />
        )
      }
    });

    return (
      <>
        <Form style={{width:'360px', margin:'auto'}}>
          <Form.Group>
            <Form.Select onChange={this.handleFilter}>
              <option value="0">Filter by number of horns</option>
              <option value="0">One or more</option>                
              <option value="1">2 or more</option>
              <option value="2">More than 2</option>
            </Form.Select>          
          </Form.Group>
        </Form>
        <main>
          {beastArray}
        </main>
      </>
    );
  }
}

export default Main;