import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.signUpForm || initialState;

export const selectSignUpForm = createSelector(
  [selectDomain],
  signUpFormState => signUpFormState,
);
