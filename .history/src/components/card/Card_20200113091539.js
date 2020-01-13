import React from "react";

import "./card.css"

export const Card = props => {
  const { name, id, avatar } = props;
  return (
    <div className="card-container">
      <h1 >{name}</h1>
    </div>
  );
};
