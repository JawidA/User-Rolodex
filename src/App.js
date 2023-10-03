import { Component } from "react";
import CardList from "./component/card-list-component";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => {
        this.setState(() => {
          return { users: user };
        });
      });
  }

  searchChange = (event) => {
    this.setState(() => {
      const searchString = event.target.value.toLowerCase();
      return { searchValue: searchString };
    });
  };

  render() {
    const filteredUsers = this.state.users.filter((item) => {
      return item.name.toLowerCase().includes(this.state.searchValue);
    });

    return (
      <div className="main-contaner">
        <input
          type="search"
          className="input-search"
          placeholder="Search User"
          onChange={this.searchChange}
        />

        <CardList filteredUsers={filteredUsers} />
      </div>
    );
  }
}

export default App;
