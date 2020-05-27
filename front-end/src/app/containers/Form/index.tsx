/**
 *
 * Form
 *
 */

import React, { memo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectForm } from './selectors';
import { formSaga } from './saga';
import { FormInput } from 'app/components/FormInput';

interface Props {
  type: string;
}
export const formSelect = useSelector(selectForm);

export const Form = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: formSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const [userInfoState, setUserInfoState] = useState({
    email: '',
    password: '',
    name: '',
  });

  const onSubmit = () => {
    dispatch({
      type: actions.submitForm.type,
      payload: {
        formType: props.type,
        ...userInfoState,
      },
    });
    if (props.type == 'signup') {
      dispatch({
        type: actions.signUpStart.type,
      });
    } else if (props.type == 'signin') {
      dispatch({
        type: actions.signInStart.type,
      });
    }
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
        <title>Form</title>
        <meta name="description" content="Description of Form" />
      </Helmet>
      <Container onSubmit={onSubmit}>
        {/* name email password */}
        {props.type == 'signup' ? (
          <FormInput label="name" type="text" onChangeFunc={onNameChange} />
        ) : null}
        <FormInput label="email" type="email" onChangeFunc={onEmailChange} />
        <FormInput
          label="password"
          type="password"
          onChangeFunc={onPasswordChange}
        />
        <button type="submit">{props.type}</button>
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
`;
