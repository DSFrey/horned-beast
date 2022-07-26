import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return(
      <main>
        {this.props.filteredData.map(beast => {
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