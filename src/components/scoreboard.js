import React from "react";

const Scoreboard = props => (
    
    <div className="scoreboard level">
        <p>Your Score: {props.score} | High Score: {props.highScore}</p>
    </div>
)

export default Scoreboard;