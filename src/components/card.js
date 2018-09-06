import React from "react";

const MemoryCard = props => (
    <div className="card">
        <img alt={props.id} src={props.source} />
    </div>
)

export default MemoryCard;