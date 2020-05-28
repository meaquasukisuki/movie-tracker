/**
 *
 * Asynchronously loads the component for SignUpForm
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SignUpForm = lazyLoad(
  () => import('./index'),
  module => module.SignUpForm,
);
