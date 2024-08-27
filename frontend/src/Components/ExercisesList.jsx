import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ExerciseComponent from "./ExerciseComponent";

function ExercisesList() {
  const [exerciseList, setExerciseList] = useState([]);
  const [exercisesPresent, setExercisesPresent] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises")
      .then((response) => {
        setExerciseList(response.data);
        setExercisesPresent(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mt-4">
      {exercisesPresent ? (
        <div className="row">
          {exerciseList.map((exercise) => (
            <div className="col-md-6 mb-4" key={exercise._id}>
              <ExerciseComponent
                name={exercise.username}
                description={exercise.description}
                duration={exercise.duration}
                date={exercise.date}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>No Exercises currently listed..</div>
      )}
    </div>
  );
  
}

export default ExercisesList;
