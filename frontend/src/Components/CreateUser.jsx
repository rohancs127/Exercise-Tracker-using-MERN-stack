import React from "react";
import { useState, useRef } from "react";
import axios from "axios";

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
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-info text-white">
              <h3 className="card-title mb-0">Create New User</h3>
            </div>
            <div className="card-body">
              <form onSubmit={onSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="username" className="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={user.username}
                    onChange={onChangeUsername}
                    id="username"
                  />
                </div>
                <div className="form-group text-center">
                  <input
                    type="submit"
                    value="Create User"
                    className="btn btn-success"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
