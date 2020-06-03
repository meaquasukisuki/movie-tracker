import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

export const selectDomain = (state: RootState) => state.form || initialState;

export const selectForm = createSelector(
  [selectDomain],
  formState => formState,
);
