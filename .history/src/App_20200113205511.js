import React, { Component } from "react";
import uuid from "uuid";
import axios from "axios";

import "./App.css";

import { CardList } from "./components/card-list/CardList";
import { SearchBox } from "./components/search-box/SearchBox";

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
  onChangeHandler = e => {
    this.setState({ searchField: e.target.value }, console.log(this.state));
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox change={this.onChangeHandler} />
        {/* <input
          type="search"

          placeholder="search monsters"
        /> */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
