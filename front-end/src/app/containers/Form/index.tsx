/**
 *
 * Form
 *
 */

import React, { memo, useState, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';

import { formSaga } from './saga';
import { FormInput } from 'app/components/FormInput';
import { selectForm } from './selectors';

interface Props {
  history?: any;
}

export const Form = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: formSaga });
  const FormState = useSelector(selectForm);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const [userInfoState, setUserInfoState] = useState({
    email: '',
    password: '',
  });
  const { history } = props;
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch({
      type: actions.signInStart.type,
      payload: {
        userState: userInfoState,
      },
    });
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

  return (
    <>
      <Helmet>
        <title>Form</title>
        <meta name="description" content="Description of Form" />
      </Helmet>
      <Container onSubmit={onSubmit}>
        {/* name email password */}

        <FormInput label="email" type="email" onChangeFunc={onEmailChange} />
        <FormInput
          label="password"
          type="password"
          onChangeFunc={onPasswordChange}
        />
        <button type="submit" onClick={onSubmit}>
          SIGN IN
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
