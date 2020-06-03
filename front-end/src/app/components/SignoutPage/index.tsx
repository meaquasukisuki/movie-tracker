/**
 *
 * SignoutPage
 *
 */
import React, { memo, useEffect } from 'react';
import styled from 'styled-components/macro';
import axiosInstance from '../../axios/axios.config';
import { useSelector } from 'react-redux';
import { selectForm } from '../../containers/Form/selectors';
import { Link, Redirect } from 'react-router-dom';

interface Props {
  history?: any;
}

export const SignoutPage = memo((props: Props) => {
  const FormState = useSelector(selectForm);
  if (!FormState.isSignedIn) {
    props.history.push('/');
  }
  useEffect(() => {
    (async function () {
      await axiosInstance
        .post('/users/signout', {
          ...FormState.userState,
        })
        .then(res => res.data);
    })();

    return () => {
      console.log('cleaned Up!');
    };
  }, []);
  localStorage.setItem('token', '');
  return (
    <Container>
      <div>Sign out Page!</div>
      <Link to={'/'}>Click to return to homepage</Link>
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  border: 2px solid white;
  margin: 0 auto;
  margin-top: 10%;
  font-size: 3rem;
  padding: 3rem;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: red;
    }
  }
`;
