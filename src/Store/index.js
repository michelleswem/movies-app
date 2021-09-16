import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movie-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
