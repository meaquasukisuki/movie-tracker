import React from 'react';
import { render } from '@testing-library/react';

import { DetailedPage } from '..';

describe('<DetailedPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<DetailedPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
