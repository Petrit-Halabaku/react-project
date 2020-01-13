import React from "react";

export const Card = props => {
  const { name, id, avatar } = props;
  return (
    <div>
      <h1 >{name}</h1>
    </div>
  );
};
