import React from 'react';
import data from './data.json';
import SelectedBeast from './SelectedBeast';
import Header from './Header.js';
import SearchBar from './SearchBar';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beastKey: 0,
      filteredData: data
    }
  }
  search = (value) => {
    let regex = new RegExp(value.toLowerCase());
    let filteredData = data.filter(beast => regex.test(beast.title.toLowerCase()) || regex.test(beast.keyword.toLowerCase()))
    this.setState({filteredData: filteredData})
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
        <SearchBar search={this.search} />
        <Main filteredData={this.state.filteredData} handleShowModal={this.handleShowModal}/>
        <Footer/>
      </>
    )
    
  }
}

export default App;
