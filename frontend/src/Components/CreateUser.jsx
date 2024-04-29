import React from "react";
import { useState, useRef } from "react";

function CreateUser() {
  const [user, setUser] = useState({
    username: "",
  });
  const onChangeUsername = (e, date) => {
    setUser({
      username: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const username = user.username;
    console.log(username);
    setUser({
      username: "",
    });
  };

  return <div>CreateUser</div>;
}

export default CreateUser;
