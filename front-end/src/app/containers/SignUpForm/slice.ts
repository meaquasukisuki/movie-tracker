import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the SignUpForm container
export const initialState: ContainerState = {
  userData: {
    email: '',
    password: '',
  },
  loading: true,
  error: null,
  isSignIn: false,
};

const signUpFormSlice = createSlice({
  name: 'signUpForm',
  initialState,
  reducers: {
    // sign up
    signUpStart(state, action: PayloadAction<any>) {
      state.loading = true;
      state.error = null;
      state.isSignIn = false;
      state.userData = action.payload.userData;
    },

    signUpSuccess(state) {
      state.loading = false;
      state.error = null;
      state.isSignIn = false;
      state.userData = {
        email: '',
        password: '',
      };
    },

    signUpFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload.error;
      state.isSignIn = false;
      state.userData = {
        email: '',
        password: '',
      };
    },
    //
  },
});

export const { actions, reducer, name: sliceKey } = signUpFormSlice;
