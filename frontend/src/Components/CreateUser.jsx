import React from "react";
import { useState, useRef } from "react";

function CreateUser() {
  const [user, setUser] = useState({
    username: "",
  });
  const onChangeUsername = (e, date) => {
    setUser({
      username: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const username = user.username;
    console.log(username);
    setUser({
      username: "",
    });
  };

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={user.username}
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
