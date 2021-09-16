import Modal from "../UI/Modal";
import classes from "./MovieDetail.module.css";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { fetchMovieDetail } from "../../Store/movie-actions";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import MovieDetailItem from "./MovieDetailItem";
import arrow from "../../assets/arrow-left2.svg";

const MovieDetail = (props) => {
  const loadedMovie = useSelector((state) => state.movies.moviesDetails);
  console.log(loadedMovie);

  const dispatch = useDispatch();
  const params = useParams();
  const { movieId } = params;

  const history = useHistory();

  const sliderCloseHandler = () => {
    history.replace("/home");
  };

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
  }, [dispatch, movieId]);

  return (
    <Modal>
      <button className={classes.arrow} onClick={sliderCloseHandler}>
        <img src={arrow} alt='logoImage' className={classes.logo} />
      </button>
      {loadedMovie && (
        <MovieDetailItem
          poster={loadedMovie.poster}
          plot={loadedMovie.plot}
          title={loadedMovie.title}
        />
      )}
      <div className={classes.action}>
        <Button title='Watch'></Button>
      </div>
    </Modal>
  );
};

export default MovieDetail;
