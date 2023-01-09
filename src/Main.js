import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component{
  render(){
    return (
      <>
        <h3>Hello There!</h3>
        <article>
          <HornedBeast />
          <HornedBeast />
        </article>
      </>
    )
  }
}

export default Main;