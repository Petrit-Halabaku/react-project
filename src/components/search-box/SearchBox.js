import React from "react";

import "./search-box.css";

export const SearchBox = props => {
  const { change } = props;
  return (
    <div>
      <input  className="search" type="search" onChange={change} />
    </div>
  );
};
