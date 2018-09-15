import React from "react";

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

const MemoryCard = props => (
    <div className="card tile" data-name={props.name}  onClick={() => rearrange(props)}>
        <img src={props.source} key={props.id} alt={props.name} height="300px" width="200px" />
    </div>
)


const rearrange = (props) => {
    let clickedName = props.name;
    console.log(this.state)

    //TODO: Check if name clicked is already in array in state
    //          if true:

    //TODO: "Push" name from props into an array in state

    // this.setState(prevState => ({
    //     clicked: [...prevState.clicked, clickedName]
    // }))
    // console.log(this.state.clicked)

    //          else: 
    //                  if state.highScore > array.length, set state.highScore = array.length
    
    //                  set array to [].

    //TODO: reshuffle array order in state.

    //TODO: change state of score to array.length

    
}


export default MemoryCard;