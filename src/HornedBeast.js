import React from "react";

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
      <div>
        <h2 onClick={this.handleLike}>{this.props.title} -- 🤍  {this.state.likes}</h2>
        <img
          src={this.props.image_url}
          alt={this.props.keyword}
          title={this.props.title}
          onClick={() => this.props.handleModal(this.props.title)}
        />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeast;