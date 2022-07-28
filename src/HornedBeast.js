import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }
  addVote = () => {
    this.setState({likes: this.state.likes + 1})
    console.log('vote count', this.state.likes);
  }

  helperHandleShowModal = () => {
    this.props.handleShowModal(this.props._id - 1)
  }

  render() {
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.image_url} alt={this.props.description} title={this.props.title} onClick={this.helperHandleShowModal}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Button variant="primary" onClick={this.addVote}>Vote</Button>
          <Card.Text>💖{this.state.likes}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeast;