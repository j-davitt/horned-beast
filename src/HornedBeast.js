import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
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

  handleClickBeast = () => {
    this.props.handleOpenModal(this.props.image_url, this.props.description)
  }

  render() {
    return (
      <>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.image_url} alt={this.props.keyword} onClick={this.handleClickBeast} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>❤️{this.state.votes} favorites.</Card.Text>
            <Button onClick={this.handleVote} variant="danger">Favorite</Button>
          </Card.Body>
        </Card>

      </>
    )
  }
}

export default HornedBeast;
