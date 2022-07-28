import React from 'react';
import HornedBeast from './HornedBeast';
import SearchBar from './SearchBar';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    }
  }
  search = (value) => {
    console.log(value);
    this.setState({searchText: value});
  }
  render() {
    return(
      <main>
        <SearchBar search={this.search} searchText={this.searchText} />
        {this.props.data.map(beast => {
          return(
            <HornedBeast
              key={beast._id}
              _id={beast._id}
              image_url={beast.image_url}
              title={beast.title}
              description={beast.description}
              keyword={beast.keyword}
              horns={beast.horns}
              handleShowModal={this.props.handleShowModal}
            />
          )
        })}
      </main>
    );
  }
}

export default Main;