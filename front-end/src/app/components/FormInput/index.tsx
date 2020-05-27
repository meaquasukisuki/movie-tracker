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
  flex-direction: column;
  width: 100%;
  & > input {
    flex-basis: 100%;    
    text-decoration: none;
  }
`;


