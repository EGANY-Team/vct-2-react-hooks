import React, { useState, useEffect } from "react";
import * as api from "./api";

const UserDetail = props => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("UserDetail useEffect");
    const { userId } = props;
    if (userId) {
      setIsLoading(true);
      api
        .getUserById(userId)
        .then(json => {
          setIsLoading(false);
          setUser(json.data);
        })
        .catch(error => console.log(error));
    } else {
      // do nothing
    }
  }, [props.userId]);

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
};

export default UserDetail;
