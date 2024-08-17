import React, { useState, useRef, useEffect } from "react";
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

  const onChangeUsername = (e) => {
    setUser((prevState) => ({
      ...prevState,
      username: e.target.value,
    }));
  };

  const onChangeDescription = (e) => {
    setUser((prevState) => ({
      ...prevState,
      description: e.target.value,
    }));
  };

  const onChangeDuration = (e) => {
    setUser((prevState) => ({
      ...prevState,
      duration: e.target.value,
    }));
  };

  const onChangeDate = (date) => {
    setUser((prevState) => ({
      ...prevState,
      date: date,
    }));
  };

  useEffect(() => {
    axios.get("http://localhost:5000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          setUser((prevState) => ({
            ...prevState,
            users: response.data.map((user) => user.username),
            username: response.data[0].username,
          }));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username: user.username,
      description: user.description,
      duration: user.duration,
      date: user.date,
    };

    console.log(exercise);

    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data));

    window.location = "/";
  };

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            ref={userInputRef}
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
