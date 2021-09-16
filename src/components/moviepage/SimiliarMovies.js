import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SimiliarMoviesList from "./SimiliarMoviesList";
import { fetchSimiliarMovies } from "../../Store/movie-actions";
import classes from "./SimiliarMovies.module.css";

const SimiliarMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSimiliarMovies());
  }, [dispatch]);

  return (
    <div className={classes["similiar-movies"]}>
      <h2 className={classes.head}>Similiar Movies</h2>
      <SimiliarMoviesList />
    </div>
  );
};

export default SimiliarMovies;
