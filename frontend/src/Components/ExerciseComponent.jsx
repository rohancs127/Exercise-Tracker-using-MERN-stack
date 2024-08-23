import React from "react";

function ExerciseComponent({ name, description, duration, date }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">User: {name}</h5>
        <p className="card-text">
          <strong>Exercise:</strong> {description}
        </p>
        <p className="card-text">
          <strong>Duration:</strong> {duration} minutes
        </p>
        <p className="card-text">
          <small className="text-muted">Date: {new Date(date).toLocaleDateString()}</small>
        </p>
      </div>
    </div>
  );
}

export default ExerciseComponent;

