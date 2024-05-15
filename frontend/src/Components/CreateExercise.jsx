import React from "react";
import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

function CreateExercise() {
  const [user, setUser] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  });

  const userInputRef = useRef(null);

  const onChangeUsername = (e, date) => {
    setUser({
      username: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const exercise = user;
    console.log(exercise);

    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data));

    window.location = "/";
  };

  const onChangeDescription = (e) => {
    setUser({
      description: e.target.value,
    });
  };

  const onChangeDuration = (e) => {
    setUser({
      duration: e.target.value,
    });
  };

  const onChangeDate = () => {
    setUser({
      date: date,
    });
  };

  // window.location = "/";

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            ref={userInputRef} // Use ref here
            required
            className="form-control"
            value={user.username}
            onChange={onChangeUsername}
          >
            {user.users.map(function (user1) {
              console.log(user);
              return (
                <option key={user1} value={user1}>
                  {user1}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={user.description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={user.duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker selected={user.date} onChange={onChangeDate} />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateExercise;
