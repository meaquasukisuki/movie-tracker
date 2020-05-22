/**
 *
 * Asynchronously loads the component for CardContainer
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CardContainer = lazyLoad(
  () => import('./index'),
  module => module.CardContainer,
);
