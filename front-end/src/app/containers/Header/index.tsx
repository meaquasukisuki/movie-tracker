/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectHeader } from './selectors';
import { headerSaga } from './saga';
import { Link } from 'react-router-dom';

interface Props {}

export const Header = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: headerSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const header = useSelector(selectHeader);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  
  

  return (
    <>
      <Helmet>
        <title>Header</title>
        <meta name="description" content="Description of Header" />
      </Helmet>
      <Container>
        <div>user info</div>
        <div className="header-info">
          <Link to={'/signin'}>Sign In</Link>
          <Link to={'/signup'}>Sign Up</Link>
        </div>
      </Container>
    </>
  );
});

const Container = styled.header`
  display: flex;
  background-color: green;
  justify-content: space-between;
  height: 7rem;
  align-items: center;
  .header-info {
    margin-right: 2rem;
    & > * {
      margin-left: 2rem;
      text-decoration: none;
      color: black;
      font-size: 2rem;
    }
  }
`;
