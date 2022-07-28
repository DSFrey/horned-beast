import React from 'react';
import data from './data.json';
import SelectedBeast from './SelectedBeast';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beastKey: 0
    }
  }
  handleShowModal = (key) => {
    this.setState({
      showModal: true,
      beastKey: key
    });
  }

  handleHideModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <>
        <SelectedBeast showModal={this.state.showModal} hideModal={this.handleHideModal} beastKey={this.state.beastKey} data={data}/>
        <Header/>
        <Main data={data} handleShowModal={this.handleShowModal}/>
        <Footer/>
      </>
    )
    
  }
}

export default App;
