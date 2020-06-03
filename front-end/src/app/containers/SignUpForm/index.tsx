/**
 *
 * SignUpForm
 *
 */

import React, { memo, useState, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';

import { signUpFormSaga } from './saga';
import { FormInput } from 'app/components/FormInput';
import { Redirect, RouteComponentProps } from 'react-router-dom';

interface Props {
  history?: any;
}

export const SignUpForm = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: signUpFormSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const [userInfoState, setUserInfoState] = useState({
    email: '',
    password: '',
    name: '',
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: actions.signUpStart.type,
      payload: {
        userData: {
          email: userInfoState.email,
          password: userInfoState.password,
          name: userInfoState.name,
        },
      },
    });
    props.history.push('/signin');
  };

  const onEmailChange = e => {
    setUserInfoState({
      ...userInfoState,
      email: e.target.value,
    });
  };

  const onPasswordChange = e => {
    setUserInfoState({
      ...userInfoState,
      password: e.target.value,
    });
  };

  const onNameChange = e => {
    setUserInfoState({
      ...userInfoState,
      name: e.target.value,
    });
  };

  return (
    <>
      <Helmet>
        <title>Sign up Form</title>
        <meta name="description" content="Description of Form" />
      </Helmet>
      <Container onSubmit={onSubmit}>
        {/* name email password */}

        <FormInput label="name" type="text" onChangeFunc={onNameChange} />

        <FormInput label="email" type="email" onChangeFunc={onEmailChange} />
        <FormInput
          label="password"
          type="password"
          onChangeFunc={onPasswordChange}
        />
        <button type="submit" onClick={onSubmit}>
          {'SIGN UP'}
        </button>
      </Container>
    </>
  );
});

const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > button {
    text-decoration: none;
    background-color: none;
    margin-top: 2rem;
    min-height: 5rem;
    min-width: 15rem;
    font-size: 3rem;
    &:hover {
      cursor: pointer;
      color: purple;
    }
  }
`;
