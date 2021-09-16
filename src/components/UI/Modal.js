import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.overlay}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop>{props.children}</Backdrop>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
