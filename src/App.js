import React, { Component } from 'react';
//import './App.css';
import heroes from './heroes.json';
import MemoryCard from './components/card';
import Scoreboard from './components/scoreboard'

/*
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: heroes,
      score: 0,
      highScore: 0,
      clicked: []
    }
  };



  render() {

    return (
      <content className="is-ancestor">
        <Scoreboard score={this.state.score} highScore={this.state.highScore} />
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
