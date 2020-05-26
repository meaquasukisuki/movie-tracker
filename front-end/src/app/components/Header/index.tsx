/**
 *
 * Header
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

interface Props {}

export function Header(props: Props) {
  return (
    <Container>
      <div className="header-info">
        <Link to={'/signin'}>Sign In</Link>
        <Link to={'/signup'}>Sign Up</Link>
      </div>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: green;
  font-size: 3rem;
  @media only-screen and (max-width: 600px) {
    justify-content: center;
  }
  & > div:last-child {
    margin-right: 3rem;
  }
  & > div > * {
    text-decoration: none;
    color: black;
    margin-left: 3rem;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
`;
