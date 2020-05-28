/**
 *
 * SignInPage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Form } from 'app/containers/Form/Loadable';

interface Props {}

export const SignInPage = memo((props: Props) => {
  return (
    <Div>
      <p className="info">
        <span>Don't have account ?</span>
        <Link to="/signup">Sign up!</Link>
      </p>
      <div className="form-container">
        <Form/>
      </div>
    </Div>
  );
});

const Div = styled.div`
  color: white;
  p {
    width: 100%;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
  }
  a {
    text-decoration: none;

    color: white;
    border-bottom: 1px white solid;
  }

  @media screen and (min-width: 600px) {
    a {
      margin-left: 3rem;
    }
    .form-container {
      width: 50%;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 600px) {
    p {
      flex-direction: column;
    }
    .form-container {
      width: 100%;
    }
  }
`;
