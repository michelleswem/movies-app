import { useSelector } from "react-redux";
import classes from "./SimiliarMoviesList.module.css";
import SimiliarMoviesItem from "./SimiliarMoviesItem";

const SimiliarMovieList = () => {
  const similiarMovies = useSelector((state) => state.movies.similiarMovies);
  return (
    <ul className={classes["similiar-list"]}>
      {similiarMovies.map((movie) => (
        <SimiliarMoviesItem
          key={movie.imdbID}
          id={movie.imdbID}
          title={movie.Title}
          poster={movie.Poster}
        />
      ))}
    </ul>
  );
};

export default SimiliarMovieList;
