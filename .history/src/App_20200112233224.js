import React, { Component } from "react";
import uuid from "uuid";
import axios from "axios";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        console.log(response.data);
      })
      .then(users => this.setState({ monsters: users }));
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(res => res.json())
    //   .then(users => console.log(users));
  }

  render() {
    const { monsters } = this.state;
    return (
      <div className="App">
        {/* {monsters.map(monster => ( */}
          <h1 >{monster}</h1>
        {/* ))} */}
      </div>
    );
  }
}

export default App;
