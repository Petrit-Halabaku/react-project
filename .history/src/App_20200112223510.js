import React, { Component } from "react";
import uuid from "uuid"
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [
        { name: "Petrit",id:uuid.v4 },
        { name: "Erblin",id:uuid.v4 },
        { name: "Natyre",id:uuid.v4 },
        { name: "Blini",id:uuid.v4 }
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
