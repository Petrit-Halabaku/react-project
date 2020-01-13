import React from "react";

import "./card-list.css";
import { Card } from "../card/Card";
export const CardList = props => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map(monster => (
         <Card key={monster.id} id={monster.id} name={monster.name} />
      ))}
    </div>
  );
};
