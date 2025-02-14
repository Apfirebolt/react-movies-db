import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieService from "./movieService";

const initialState = {
  movies: [],
  movie: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get Multiple movies
export const getMovies = createAsyncThunk(
  "movies/getMovie",
  async (search, thunkAPI) => {
    try { 
      return await movieService.getMovies(search);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);


// Get single movie
export const getMovie = createAsyncThunk(
  'movies/get',
  async (movieId, thunkAPI) => {
    try {
      return await movieService.getMovie(movieId)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    reset: (state) => initialState,
    resetVariables: (state) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movie = action.payload;
      })
      .addCase(getMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { reset, resetVariables } = movieSlice.actions;
export default movieSlice.reducer;