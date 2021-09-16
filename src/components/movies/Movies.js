import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import key from "../../assets/Search.svg";
import search from "../../assets/Search.svg";
import { fetchMovieData } from "../../Store/movie-actions";
import { movieActions } from "../../Store/movie-slice";
import MovieList from "./MovieList";
import classes from "./Movies.module.css";

const Movies = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.movies.searchValue);
  const movies = useSelector((state) => state.movies.movies);

  const searchChangeHandler = (event) => {
    dispatch(movieActions.searchMovies(event.target.value));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (searchValue.trim().length === 0) {
      return;
    }

    dispatch(fetchMovieData(searchValue));
  };

  const moviesHeading =
    movies.length > 0 ? (
      <p className={classes.heading}>Results for: {searchValue}</p>
    ) : (
      ""
    );

  return (
    <Fragment>
      <h1>Explore</h1>
      <form onSubmit={submitHandler} className={classes.home}>
        <img src={search} alt='searchImage' className={classes.ano} />
        <input
          type='text'
          placeholder='Search'
          onChange={searchChangeHandler}
          value={searchValue}
        />
        <button type='submit' className={classes.submit}>
          <span className={classes.text}>Search</span>
          <span className={classes.icon}>
            <img src={key} alt='glassimage' className={classes.search} />
          </span>
        </button>
      </form>
      {moviesHeading}
      {movies.length === 0 && (
        <p className={classes.heading}>Search for movies</p>
      )}
      <MovieList />
    </Fragment>
  );
};

export default Movies;
