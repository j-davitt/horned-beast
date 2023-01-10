import React from 'react';

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
          <img src={this.props.image_url} alt={this.props.keyword}></img>
          <p>{this.props.description}</p>
          <button onClick={this.handleVote}>Vote Here!</button>
          <p>{this.state.votes} votes.</p>
        </article>
      </>
    )
  }
}

export default HornedBeast;
