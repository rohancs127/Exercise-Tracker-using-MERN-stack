import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/es/react-datepicker.css";

function CreateExercise() {
  const [user, setUser] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  });

  const onChangeUsername = (e, date) => {
    setUser({
      username: e.target.value,
      description: e.target.value,
      duration: e.target.value,
      date: date,
    });
  };

  const onSubmit = () => {};

  const onChangeDescription = () => {};

  const onChangeDuration = () => {};

  const onChangeDate = () => {};

  const exercise = user;
  console.log(exercise);

  // window.location = "/";

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            ref="userInput"
            required
            className="form-control"
            value={user.username}
            onChange={onChangeUsername}
          >
            {user.users.map(function (user1) {
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
