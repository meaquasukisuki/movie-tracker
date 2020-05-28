/**
 *
 * FormInput
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

interface Props {
  label: string;
  type: string;
  onChangeFunc: (e: any) => void;
}

export const FormInput = memo((props: Props) => {
  return (
    <Input>
      <span>{props.label}</span>
      <input type={props.type} onChange={props.onChangeFunc} />
    </Input>
  );
});

const Input = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  width: 100%;
  & > input {
    flex-basis: 100%;
    text-decoration: none;
    outline: none;
    background-color: #14181c;
    border: none;
    border-bottom: white 1px solid;
    color: white;
    margin-top: 2rem;
    & :focus {
      border-bottom-width: 3px;
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 4rem;
  }
  @media screen and (min-width: 620px) {
    font-size: 2.5rem;
    & > input {
      font-size: 2rem;
    }
  }
`;
