import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';

class Main extends React.Component {
  render() {
    return(
      <main>
        {data.map(beast => {
          return(
            <HornedBeast
            _id={beast._id}
            image_url={beast.image_url}
            title={beast.title}
            description={beast.description}
            key={beast.keyword}
            horns={beast.horns}
            />
          )
        })}
      </main>
    );
  }
}

export default Main;