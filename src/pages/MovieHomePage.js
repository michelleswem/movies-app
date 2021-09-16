import { Fragment } from "react";
import MainContent from "../components/Layout/MainContent";
import Movies from "../components/movies/Movies";
import MovieDetail from "../components/moviesDetails/MovieDetail";
import { Route } from "react-router-dom";

const MovieHomePage = () => {
  return (
    <Fragment>
      <Route path='/home/details/:movieId'>
        <MovieDetail />
      </Route>
      <MainContent>
        <Movies />
      </MainContent>
    </Fragment>
  );
};

export default MovieHomePage;
