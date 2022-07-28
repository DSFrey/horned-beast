import React from "react";
import Modal from 'react-bootstrap/Modal'

class SelectedBeast extends React.Component {
  render() {
    return(
      <Modal show={this.props.showModal} onHide={this.props.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.data[this.props.beastKey].title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.data[this.props.beastKey].image_url} alt={this.props.data[this.props.beastKey].description}/>
        </Modal.Body>
      </Modal>
    )
  }
}

export default SelectedBeast;