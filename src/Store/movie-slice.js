import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    searchValue: "",
    movies: [],
    moviesDetails: null,
    similiarMovies: [],
    showMoviesDetails: null,
  },
  reducers: {
    searchMovies(state, action) {
      state.searchValue = action.payload;
    },

    getMovies(state, action) {
      state.movies = action.payload.movies;
    },

    getDetails(state, action) {
      state.moviesDetails = {
        title: action.payload.title,
        plot: action.payload.plot,
        poster: action.payload.poster,
      };
    },
    getSimiliarMovies(state, action) {
      state.similiarMovies = action.payload.Search;
    },

    getMovieDetails(state, action) {
      state.showMoviesDetails = {
        id: action.payload.id,
        poster: action.payload.poster,
        rating: action.payload.rating,
        released: action.payload.released,
        time: action.payload.time,
        title: action.payload.title,
        plot: action.payload.plot,
      };
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice;
