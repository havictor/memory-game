import React, { Component } from 'react';
//import './App.css';
import heroes from './heroes.json';
import MemoryCard from './components/card';

class App extends Component {
  state = {
    heroes
  }

  render() {
    return (

      <div className="HeroList">
          {this.state.heroes.map(hero => (
            <MemoryCard key={hero.id} alt={hero.name} src={hero.source} />
          ))}
      </div>  
    );
  }
}

export default App;
