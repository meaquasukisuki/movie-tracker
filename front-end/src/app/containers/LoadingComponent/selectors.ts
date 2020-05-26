import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.loadingComponent || initialState;

export const selectLoadingComponent = createSelector(
  [selectDomain],
  loadingComponentState => loadingComponentState,
);
