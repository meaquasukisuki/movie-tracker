import React from 'react';
import { render } from '@testing-library/react';

import { SignoutPage } from '..';

describe('<SignoutPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SignoutPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
