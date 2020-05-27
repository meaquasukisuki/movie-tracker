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
        <span>{name}</span>
        <span>{email}</span>
      </div>
      <div className="content">{text}</div>
    </Div>
  );
}

const Div = styled.div`
  border-bottom: 2px black solid;
  color: black;
  background-color: whitesmoke;
  span {
    margin: 2rem;
  }
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;
