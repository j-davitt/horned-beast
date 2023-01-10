import React from 'react';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      votes: 0,
    }
  }

  handleVote = () => {
    this.setState({
      votes: this.state.votes + 1
    })
  }

  render(){
    return (
      <>
        <article>
          <h2>{this.props.title}</h2>
          <p>❤️{this.state.votes} favorites.</p>
          <img src={this.props.image_url} alt={this.props.keyword}></img>
          <p>{this.props.description}</p>
          <Button onClick={this.handleVote} variant="danger">Favorite</Button>
        </article>
      </>
    )
  }
}

export default HornedBeast;
