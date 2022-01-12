import React from "react";
// import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

  handleLike = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    return(
      // <Card style={{ width: '18rem' }}>
      //   <Card.Img variant="top" src={this.props.image_url} onClick={this.handleLike} alt={this.props.keyword} title={this.props.title} />
      //   <Card.Body>
      //     <Card.Title>{this.props.title}</Card.Title>
      //     <Card.Subtitle className="mb-2 text-muted">likes: {this.state.likes}</Card.Subtitle>
      //     <Card.Text>{this.props.description}</Card.Text>
      //   </Card.Body>
      // </Card>

      <div>
        <h2>{this.props.title} -- 👋  {this.state.likes}</h2>
        <img src={this.props.image_url} onClick={this.handleLike} alt={this.props.keyword} title={this.props.title}/>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeast;