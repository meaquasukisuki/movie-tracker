/**
 *
 * Asynchronously loads the component for SignoutPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SignoutPage = lazyLoad(
  () => import('./index'),
  module => module.SignoutPage,
);
