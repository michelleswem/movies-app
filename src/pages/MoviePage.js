import MainContent from "../components/Layout/MainContent";
import SimiliarMoviesContent from "../components/moviepage/SimiliarMoviesContent";
import SimiliarMovies from "../components/moviepage/SimiliarMovies";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoreMoviesDetails } from "../Store/movie-actions";
import { useEffect } from "react";

const MoviePage = () => {
  const showMoviesDetails = useSelector(
    (state) => state.movies.showMoviesDetails
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMoreMoviesDetails());
  }, [dispatch]);

  return (
    <MainContent>
      {showMoviesDetails && (
        <SimiliarMoviesContent
          id={showMoviesDetails.id}
          poster={showMoviesDetails.poster}
          plot={showMoviesDetails.plot}
          released={showMoviesDetails.released}
          rating={showMoviesDetails.rating}
          time={showMoviesDetails.time}
          title={showMoviesDetails.title}
        />
      )}
      <SimiliarMovies />
    </MainContent>
  );
};

export default MoviePage;
