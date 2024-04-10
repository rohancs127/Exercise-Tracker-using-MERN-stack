import React from "react";
import { useState } from "react";

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

  const exercise = user;
  console.log(exercise);

  window.location = "/";

  return <div>CreateExercise</div>;
}

export default CreateExercise;
