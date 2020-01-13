import React from "react";

import "./search-box.css";

export const SearchBox = props => {
  const { change } = props;
  return (
    <div className="search">
      <input type="search" onChange={change} name="" id="" />
    </div>
  );
};
