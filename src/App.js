// 1st import
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data/data.json';
import SelectedBeast from './SelectedBeast';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


// 2nd class component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedData: data,
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

  handleSelect = (event) => {
    let selected = event.target.value;

    if (selected === '1') {
      let newData = data.filter(e => e.horns === 1);
      this.setState({
        sortedData: newData
      })
    } else if (selected === '2') {
      let newData = data.filter(e => e.horns === 2);
      this.setState({
        sortedData: newData
      })
    } else if (selected === '3') {
      let newData = data.filter(e => e.horns === 3);
      this.setState({
        sortedData: newData
      })
    } else if (selected === '100') {
      let newData = data.filter(e => e.horns === 100);
      this.setState({
        sortedData: newData
      })
    }
  }

  render() {
    return (
      <>
        <Header />
        <Form>
          <Form.Group>
            <Form.Select name='selected' onChange={this.handleSelect}>
              <option>Open this select menu</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Main
          data={this.state.sortedData}
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