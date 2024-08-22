import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ExerciseComponent from "./ExerciseComponent";

function ExercisesList() {
  const [exerciseList, setExerciseList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises")
      .then((response) => {
        setExerciseList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {
        exerciseList.map((exercise)=>(
          <ExerciseComponent name={exercise.username} description={exercise.description} duration={exercise.duration} date={exercise.date} />
        ))
      }
    </div>
  );
}

export default ExercisesList;
