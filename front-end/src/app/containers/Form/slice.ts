import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Form container
export const initialState: ContainerState = {
  email: '',
  password: '',
  loading: true,
  error: null,
  formType: 'signup',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submitForm(state, action: PayloadAction<any>) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.formType = action.payload.formType;
      if (action.payload.formType == 'signup') {
        state.name = action.payload.name;
      }
    },
    signUpStart(state) {
      state.loading = true;
      state.error = null;
    },

    // signUpSuccess(state,action:Pa)
    signInStart(state) {
      state.loading = true;
      state.error = null;
    },
  },
});

export const { actions, reducer, name: sliceKey } = formSlice;
