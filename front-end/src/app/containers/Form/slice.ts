import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Form container
export const initialState: ContainerState = {
  // best is to use auth token to perform user data,
  // but now we hang in there
  userData: {
    email: '',
    password: '',
  },
  loading: true,
  error: null,
  isSignedIn: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // sign in
    signInStart(state, action: PayloadAction<any>) {
      state.loading = true;
      state.error = null;
      state.userData = action.payload.userData;
    },
    signInSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = null;
      state.userData = action.payload.userData;
      state.isSignedIn = true;
    },

    signInFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload.error;
      state.userData = {
        email: '',
        password: '',
      };
    },
    signOutStart() {},
    signOutSuccess(state) {
      state.isSignedIn = false;
      state.userData = {
        email: '',
        password: '',
      };
    },
    signOutFailure(state, action: PayloadAction<any>) {
      state.error = action.payload.error;
    },
  },
});

export const { actions, reducer, name: sliceKey } = formSlice;
