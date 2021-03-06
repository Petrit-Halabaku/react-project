import React from "react";

import "./card.css"

export const Card = props => {
  const { name, id } = props;
  return (
    <div className="card-container">
    <img src={`https://robohash.org/${id}`} alt=""/>
      <h1 >{name}</h1>
    </div>
  );
};
