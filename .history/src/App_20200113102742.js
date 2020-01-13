import React, { Component } from "react";
import uuid from "uuid";
import axios from "axios";

import "./App.css";

import { CardList } from "./components/card-list/CardList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      this.setState({ monsters: response.data });
      console.log(response.data);
    });
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(res => res.json())
    //   .then(users => console.log(users));
  }

  render() {
    const { monsters } = this.state;
    return (
      <div className="App">
        <input
          type="search"
          onChange={e => this.setState({ searchFielad: e.target.value })}
          name=""
          id=""
          placeholder="search monsters"
        />
        <CardList monsters={monsters} />
      </div>
    );
  }
}

export default App;
