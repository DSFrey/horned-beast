import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

class SearchBar extends React.Component {
  handleSearch = (event) => {
    this.props.search(event.target.value);
  }
  handleHornsFilter = (event) => {
    this.props.hornsFilter(event.target.value);
  }
  render() {
    return (
      <InputGroup>
        <InputGroup.Text>Search</InputGroup.Text>
        <Form.Control type="text" placeholder='Title or Keyword' onChange={this.handleSearch}></Form.Control>
        <Form.Group className='horn-select'>
          <InputGroup.Text>Number of Horns</InputGroup.Text>
          <Form.Select onChange={this.handleHornsFilter}>
            <option>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>100</option>
          </Form.Select>
        </Form.Group>
      </InputGroup>
    )
  }
}
export default SearchBar