import { Fragment } from "react";
import classes from "./MovieDetailItem.module.css";

const MovieDetailItem = (props) => {
  return (
    <Fragment>
      <figure className={classes.item}>
        <img src={props.poster} alt='movieimage' />
      </figure>
      <h2>{props.title}</h2>
      <p className={classes.description}>{props.plot}</p>
    </Fragment>
  );
};
export default MovieDetailItem;
