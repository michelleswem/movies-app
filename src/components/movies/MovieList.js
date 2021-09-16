import { useSelector } from "react-redux";
import classes from "./MovieList.module.css";
import MovieItem from "./MovieItem";

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  return (
    <ul className={classes["movie-list"]}>
      {movies.map((movie) => (
        <MovieItem
          key={movie.imdbID}
          id={movie.imdbID}
          title={movie.Title}
          poster={movie.Poster}
        />
      ))}
    </ul>
  );
};

export default MovieList;
