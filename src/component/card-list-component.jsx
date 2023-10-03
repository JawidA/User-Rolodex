import { Component } from "react";
import "./card-list-style.css";

class CardList extends Component {
  render() {
    const { filteredUsers } = this.props;

    return (
      <div className="card-list">
        {filteredUsers.map((item) => {
          return (
            <div key={item.id} className="card">
              <img src={`https://robohash.org/${item.id}?set=set5&size=200x200`} />
              <h1>{item.name}</h1>
              <p>{item.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
