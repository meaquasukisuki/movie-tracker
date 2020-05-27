import React from 'react';
import { render } from '@testing-library/react';

import { Comment } from '..';

describe('<Comment  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Comment />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
