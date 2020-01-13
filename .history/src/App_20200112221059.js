import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [
        { name: "Petrit" },
        { name: "Erblin" },
        { name: "Natyre" },
        { name: "Blini" }
      ]
    };
  }

  render() {
    const { monsters } = this.state;
    return (
      <div className="App">
        {monsters.map(monster => `<h1>${moster.name}</h1>`)}
      </div>
    );
  }
}

export default App;
