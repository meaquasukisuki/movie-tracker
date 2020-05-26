/**
 *
 * Asynchronously loads the component for DetailedPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DetailedPage = lazyLoad(
  () => import('./index'),
  module => module.DetailedPage,
);
