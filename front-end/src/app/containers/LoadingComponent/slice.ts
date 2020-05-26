import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the LoadingComponent container
export const initialState: ContainerState = {
  loading: false,
};

const loadingComponentSlice = createSlice({
  name: 'loadingComponent',
  initialState,
  reducers: {
    setLoadingState(state) {
      state.loading = true;
    },
    cancelLoadingState(state) {
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = loadingComponentSlice;
