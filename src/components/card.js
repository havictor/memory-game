import React from "react";

const MemoryCard = props => (
    <div className="card">
        <img src={props.source} key={props.id} alt={props.name}  />
    </div>
)

export default MemoryCard;