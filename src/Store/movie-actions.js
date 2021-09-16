import { movieActions } from "./movie-slice";
import { uiActions } from "./ui-slice";

const fetchRequest = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Request Failed");
  }
  const data = await response.json();
  return data;
};

export const fetchMovieData = (searchValue) => {
  return async (dispatch) => {
    try {
      const movieData = await fetchRequest(
        `http://www.omdbapi.com/?s=${searchValue}&apikey=74005a34`
      );
      dispatch(
        movieActions.getMovies({
          movies: movieData.Search || [],
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          message: "fetching movies failed!",
          title: error.message,
        })
      );
    }
  };
};

export const fetchMovieDetail = (movieId) => {
  return async (dispatch) => {
    try {
      const movieDetails = await fetchRequest(
        `http://www.omdbapi.com/?i=${movieId}&apikey=74005a34`
      );

      dispatch(
        movieActions.getDetails({
          title: movieDetails.Title,
          poster: movieDetails.Poster,
          plot: movieDetails.Plot,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          message: "fetching movie details failed!",
          title: error.message,
        })
      );
    }
  };
};

export const fetchSimiliarMovies = () => {
  return async (dispatch) => {
    try {
      const similiarMoviesData = await fetchRequest(
        "https://www.omdbapi.com/?s=mortal+kombat&apikey=74005a34"
      );
      dispatch(movieActions.getSimiliarMovies(similiarMoviesData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          message: "fetching similiar movies failed!",
          title: error.message,
        })
      );
    }
  };
};

export const fetchMoreMoviesDetails = () => {
  return async (dispatch) => {
    try {
      const moviesData = await fetchRequest(
        "https://www.omdbapi.com/?t=mortal+kombat&apikey=74005a34"
      );
      dispatch(
        movieActions.getMovieDetails({
          id: moviesData.imdbID,
          title: moviesData.Title,
          poster: moviesData.Poster,
          plot: moviesData.Plot,
          rating: moviesData.imdbRating,
          released: moviesData.Released,
          time: moviesData.Runtime,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          message: "fetching movies more details failed!",
          title: error.message,
        })
      );
    }
  };
};
