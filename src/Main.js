import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return(
      <main>
        {this.props.data.map(beast => {
          return(
            <HornedBeast
            _id={beast._id}
            image_url={beast.image_url}
            title={beast.title}
            description={beast.description}
            keyword={beast.keyword}
            horns={beast.horns}
            />
          )
        })}
      </main>
    );
  }
}

export default Main;