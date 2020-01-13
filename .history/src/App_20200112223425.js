import React, { Component } from "react";
import uuid from "uuid"
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [
        { name: "Petrit",id:uuid.v1() },
        { name: "Erblin",id:uuid.v1() },
        { name: "Natyre",id:uuid.v1() },
        { name: "Blini",id:uuid.v1() }
      ]
    };
  }

  render() {
    const { monsters } = this.state;
    return (
      <div className="App">
        {monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
