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

  const onChangeusername = (e, date) => {
    setUser({
      username: e.target.value,
      description: e.target.value,
      duration: e.target.value,
      date: date,
    });
  };

  return <div>CreateExercise</div>;
}

export default CreateExercise;
