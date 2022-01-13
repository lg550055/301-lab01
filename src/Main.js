import React from 'react';
import HornedBeast from './HornedBeast.js';


class Main extends React.Component {
  render () {
    let beastArray = this.props.data.map( (e, i) => (
      <HornedBeast
        title={e.title}
        image_url={e.image_url}
        description={e.description}
        keyword={e.keyword}
        key={i}
        handleModal={this.props.handleModal}
      />
    ));

    return (
      <main>
        {beastArray}
      </main>
    );
  }
}

export default Main;