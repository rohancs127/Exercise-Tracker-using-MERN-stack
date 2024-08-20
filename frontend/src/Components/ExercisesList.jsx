import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ExercisesList() {
  const [exerciseList, setExerciseList] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/exercises")
    .then(response =>{
      setExerciseList(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, []) 

  return <div>ExercisesList</div>;
}

export default ExercisesList;
