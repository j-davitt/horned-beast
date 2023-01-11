import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {

  handleClickBeast = () => {
    this.props.handleOpenModal()
  }

  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <img src={this.props.selectedBeast} alt='' width='90%'></img>
            <p>{this.props.selectedBeastDesc}</p>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;