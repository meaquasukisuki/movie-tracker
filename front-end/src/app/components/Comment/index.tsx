/**
 *
 * Comment
 *
 */
import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  _id: string;
  name: string;
  email: string;
  movie_id: string;
  text: string;
  key: any;
}

export function Comment(props: Props) {
  const { name, email, text } = props;
  return (
    <Div>
      <div className="userInfo">
        <span>name:{name}</span>
        <span>email:{email}</span>
      </div>
      <div className="content">{text}</div>
    </Div>
  );
}

const Div = styled.div`
  border-bottom: 2px black solid;
  width: 100%;
  color: black;
  background-color: #f5e8cb;
  display: flex;
  flex-direction: column;
  .userInfo {
    display: flex;
    flex-direction: column;
  }
  /* span {
    margin: 2rem;
  } */
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;
