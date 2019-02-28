import React, { Component } from "react";
import * as api from "./api";
import UserDetail from "./UserDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      users: []
    };
  }

  setUserId(userId) {
    this.setState({ userId });
  }

  componentDidMount() {
    api
      .getAllUsers()
      .then(json => {
        console.log("App cdm");
        this.setState({ users: json.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <main className="container">
        <div className="user-list">
          {this.state.users.map(user => (
            <div
              key={user.id}
              className={`user ${
                user.id === this.state.userId ? "user--selected" : ""
              }`}
              onClick={() => this.setUserId(user.id)}
            >
              <img src={user.avatar} />
              <p>
                {user.first_name} {user.last_name}
              </p>
            </div>
          ))}
        </div>
        <div className="user-detail">
          <h3>Selected User</h3>
          <UserDetail userId={this.state.userId} />
        </div>
      </main>
    );
  }
}

export default App;
