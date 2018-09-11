import React, { Component } from 'react';
//import './App.css';
import heroes from './heroes.json';
import MemoryCard from './components/card';

class App extends Component {
    state = {
      heroes: heroes
    }

  render() {
    return (
      <content className="is-ancestor">
        <div classsName="is-parent">
          <div className="HeroList tile">
              {this.state.heroes.map((hero) => (
                <MemoryCard source={hero.source} key={hero.id} name={hero.name} />
              ))}
          </div>
        </div>
      </content>
    );
  }
}

export default App;
