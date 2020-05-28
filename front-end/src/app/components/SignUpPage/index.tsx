/**
 *
 * SignUpPage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { SignUpForm } from 'app/containers/SignUpForm/Loadable';

interface Props {}

export const SignUpPage = memo((props: Props) => {
  return (
    <FormContainer>
      <SignUpForm />
    </FormContainer>
  );
});

const FormContainer = styled.div`
  color: white;

  @media screen and (min-width: 600px) {
    width: 50%;
    margin: 0 auto;
  }
  @media screen and (max-width: 700px) {
    p {
      flex-direction: column;
    }
    width: 100%;
  }
`;
