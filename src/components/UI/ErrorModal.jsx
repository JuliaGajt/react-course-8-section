import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.confirmHandler} />;
};

const OverlayModal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.confirmHandler}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  const confirmHandler = () => {
    props.onConfirm();
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop confirmHandler={confirmHandler} />,
        document.getElementById("backdrop-modal")
      )}
      {ReactDOM.createPortal(
        <OverlayModal
          title={props.title}
          message={props.message}
          confirmHandler={confirmHandler}
        />,
        document.getElementById("overlay-modal")
      )}
    </Fragment>
  );
};

export default ErrorModal;
