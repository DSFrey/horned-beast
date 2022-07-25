import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return(
      <section>
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt={this.props.description} title={this.props.title}/>
        <p>{this.props.description}</p>
      </section>
    )
  }
}

export default HornedBeast;