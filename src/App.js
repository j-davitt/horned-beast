// 1st import
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data/data.json';
import SelectedBeast from './SelectedBeast';
import Modal from 'react-bootstrap/Modal';


// 2nd class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: '',
      selectedBeastDesc: '',
    }
  }

  handleOpenModal = (image, desc) => {
    this.setState({
      showModal: true,
      selectedBeast: image,
      selectedBeastDesc: desc,
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
          handleOpenModal={this.handleOpenModal}
        />
        <SelectedBeast
          Modal={Modal}
          // handleOpenModal={this.handleOpenModal}
          handleCloseModal={this.handleCloseModal}
          selectedBeast={this.state.selectedBeast}
          selectedBeastDesc={this.state.selectedBeastDesc}
          showModal={this.state.showModal}
        />
        <Footer />
      </>
    )
  }
}

// 3rd export component so other files can import them
export default App;