import { useState } from "react";
import "./UserInput.css";

const UserInput = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (name !== "" && age !== "") {
      let newUser = { id: Math.random().toString(), name: name, age: age };
      props.addUser(name, age);
      setAge("");
      setName("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="user-input">
        <label>Name</label>
        <input type="text" onChange={nameChangeHandler} value={name} />
        <label>Age (in years)</label>
        <input type="text" onChange={ageChangeHandler} value={age} />
      </div>
      <button type="submit">Add user</button>
    </form>
  );
};

export default UserInput;
