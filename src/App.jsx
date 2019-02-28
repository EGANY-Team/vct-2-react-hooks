import React, { useState, useEffect } from "react";
import * as api from "./api";
import UserDetail from "./UserDetail";

const App = props => {
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("App useEffect");
    api
      .getAllUsers()
      .then(json => setUsers(json.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <main className="container">
      <div className="user-list">
        {users.map(user => (
          <div
            key={user.id}
            className={`user ${user.id === userId ? "user--selected" : ""}`}
            onClick={() => setUserId(user.id)}
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
        <UserDetail userId={userId} />
      </div>
    </main>
  );
};

export default App;
