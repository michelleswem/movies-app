import classes from "./Button.module.css";

const Button = (props) => {
  return <button className={classes["btn-title"]}>{props.title}</button>;
};

export default Button;
