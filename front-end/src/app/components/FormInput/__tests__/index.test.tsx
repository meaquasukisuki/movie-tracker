import React from 'react';
import { render } from '@testing-library/react';

import { FormInput } from '..';

describe('<FormInput  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<FormInput />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
