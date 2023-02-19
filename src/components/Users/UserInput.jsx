import { useState, useRef } from "react";
import classes from "./UserInput.module.css";
import Card from "../UI/Card.jsx";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal.jsx";
import Wrapper from "../Helpers/Wrapper.jsx";

const UserInput = (props) => {
  const userName = useRef();
  const userAge = useRef();

  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const userName_ = userName.current.value;
    const userAge_ = userAge.current.value;

    if (userName_.trim() === "" || userAge_.trim() === "") {
      setError({
        title: "Invalid input",
        message: "Each input must be filled.",
      });
      return;
    }

    if (+userAge_ < 1) {
      setError({
        title: "Invalid age",
        message: "Age must be positive number (>0).",
      });
      return;
    }
    props.addUser(userName_, userAge_);
    userName.current.value = "";
    userAge.current.value = "";
  };

  const confirmHandler = () => {
    setError();
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={confirmHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Name</label>
          <input id="username" type="text" ref={userName} />
          <label htmlFor="age">Age (in years)</label>
          <input id="age" type="number" ref={userAge} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserInput;
