import classes from "./SimiliarMoviesItem.module.css";
import { Link } from "react-router-dom";

const SimiliarMoviesItem = (props) => {
  return (
    <li className={classes["similiar-item"]}>
      <div className={classes.card}>
        <figure className={classes.item}>
          <img src={props.poster} alt='movieimage' />
          <Link to={`/home/details/${props.id}`} className={classes.btn}>
            View
          </Link>
        </figure>
      </div>
    </li>
  );
};

export default SimiliarMoviesItem;
