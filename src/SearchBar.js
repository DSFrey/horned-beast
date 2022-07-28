import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

class SearchBar extends React.Component {
  handleSearch = (event) => {
    this.props.search(event.target.value);
  }
  render() {
    return(
      <InputGroup>
        <InputGroup.Text>Search</InputGroup.Text>
        <FormControl placeholder='Title or Keyword' onChange={this.handleSearch}></FormControl>
      </InputGroup>
    )
  }
}
export default SearchBar