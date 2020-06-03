import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Form container
export const initialState: ContainerState = {
  // best is to use auth token to perform user data,
  // but now we hang in there
  userState: {
    email: '',
    password: '',
  },
  userData: {
    user: {},
    token: '',
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
      state.userState = action.payload.userState;
    },
    signInSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = null;
      state.userData = action.payload.userData;
      state.userState.name = state.userData.user.name;

      localStorage.setItem('token', state.userData.token || '');
      if ((localStorage.getItem('token') || '').length > 0) {
        state.isSignedIn = true;
      }
    },

    signInFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload.error;
      state.userState = {
        email: '',
        password: '',
      };
    },
    signOutStart() {},
    signOutSuccess(state) {
      state.isSignedIn = false;
      state.userState = {
        email: '',
        password: '',
      };
      state.userData = {
        token: '',
        user: {},
      };
      localStorage.setItem('token', '');
    },
    signOutFailure(state, action: PayloadAction<any>) {
      state.error = action.payload.error;
    },
  },
});

export const { actions, reducer, name: sliceKey } = formSlice;
