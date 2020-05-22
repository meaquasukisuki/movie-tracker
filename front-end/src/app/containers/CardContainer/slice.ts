import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { fetchMovies } from './saga';

// The initial state of the CardContainer container
export const initialState: ContainerState = {
  page: 1,
  moviesData: [],
  limit: 25,
  loading: false,
  error: null,
};

const cardContainerSlice = createSlice({
  name: 'cardContainer',
  initialState,
  reducers: {
    fetchMovieStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchMovieSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.moviesData = action.payload;
    },
    fetchMovieFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
    nextPageStart(state) {
      state.page = state.page + 1;
      state.loading = true;
    },

    previousPageStart(state) {
      state.page = state.page - 1;
      state.loading = true;
      console.log(state.page);
    },

    setMoviesCount(state, action: PayloadAction<any>) {
      state.limit = action.payload.limit;
    },
  },
});

export const { actions, reducer, name: sliceKey } = cardContainerSlice;
