import React, { Component } from "react";
import * as api from "./api";

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      user: null
    };
  }

  componentDidUpdate(prevProps) {
    console.log("UserDetail cdu");
    const newUserId = this.props.userId;
    const oldUserId = prevProps.userId;

    if (newUserId === oldUserId) return;

    if (newUserId) {
      this.setState({ isLoading: true });
      api
        .getUserById(newUserId)
        .then(json => {
          this.setState({ user: json.data, isLoading: false });
        })
        .catch(error => console.log(error));
    } else {
      // do nothing
    }
  }

  render() {
    const { isLoading, user } = this.state;
    if (isLoading) return <div>Loading in the deep...</div>;
    if (!user) return <div>No user selected</div>;

    // has user
    return (
      <div className="user user--selected">
        <img src={user.avatar} />
        <p>
          {user.first_name} {user.last_name}
        </p>
      </div>
    );
  }
}

export default UserDetail;
