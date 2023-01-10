import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data/data.json';
import './Main.css';

class Main extends React.Component{
  render(){
    return (
      <>
        <h3>Hello There!</h3>
        <main>
          {data.map(e => {
            return <HornedBeast title={e.title} image_url={e.image_url} description={e.description} keyword={e.keyword} key={e._id}/>
          })}
        </main>
        
      </>
    )
  }
}

export default Main;