import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.cardContainer || initialState;

export const selectCardContainer = createSelector(
  [selectDomain],
  cardContainerState => cardContainerState,
);
