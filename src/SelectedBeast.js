import React from "react";

class Modal extends React.Component {
  render() {
    return(
      <Modal show={this.props.showModal} onHide={this.props.hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>{this.props.data.title}</Modal.Title>
        <Modal.Body>
          <img src={this.props.data.image_url} alt={this.props.data.description}/>
        </Modal.Body>
      </Modal.Header>
    </Modal>
    )
  }
}

export default Modal;