import React from "react";

function ExerciseComponent({name, description, duration, date}) {
  return (
    <div>
      <div>User: {name}</div>
      <div>Exercise: {description}</div>
      <div>Duration: {String(duration)}</div>
      <div>Date: {Date(date)}</div>
    </div>
  );
}

export default ExerciseComponent;
