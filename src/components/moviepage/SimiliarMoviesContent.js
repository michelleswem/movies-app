import classes from "./SimiliarMoviesContent.module.css";
import heart from "../../assets/Heart.svg";
import star from "../../assets/star.svg";
import triangle from "../../assets/triangle-right.svg";
import chevron from "../../assets/chevron-with-circle-left.svg";
import Button from "../UI/Button";

const SimiliarMoviesContent = (props) => {
  return (
    <div className={classes.movie}>
      <figure className={classes.item}>
        <img src={props.poster} alt='movieimage' />
      </figure>

      <div className={classes.content}>
        <h2 className={classes.heading}>{props.title}</h2>
        <p className={classes.text}>{props.plot}</p>
        <div className={classes.holder}>
          <div className={classes.container}>
            <img src={chevron} alt='imagechevron' />
            <span>{props.released}</span>
          </div>
          <div className={classes.container}>
            <img src={star} alt='imagestar' />
            <span>{props.rating}</span>
          </div>
          <div className={classes.container}>
            <img src={triangle} alt='imagetriangle' />
            <span>{props.time}</span>
          </div>
        </div>

        <div className={classes.action}>
          <Button title='Watch Now'></Button>
          <span className={classes.box}>
            <img src={heart} alt='imageheart' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SimiliarMoviesContent;
