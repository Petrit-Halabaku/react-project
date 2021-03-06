import React from "react";

import "./card.css";

export const Card = props => {
  const { name, id,email } = props.monsters;
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="" />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};
