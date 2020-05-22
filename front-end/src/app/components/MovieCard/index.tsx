/**
 *
 * MovieCard
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { media } from 'styles/media';
import { callbackify } from 'util';

interface Props {
  title: string;
  poster?: string;
  _id: string;
}

export const MovieCard = memo((props: Props) => {
  let { title, poster } = props;
  if (!poster) {
    poster = 'https://via.placeholder.com/500';
  }

  return (
    <Div>
      <img src={poster} width={300} height={300} />
      <section className="title-container">{title}</section>
    </Div>
  );
});

const Div = styled.div`
  display: flex;
  max-width: 500px;
  max-height: 500px;
  flex-flow: column;
  position: relative;
  margin: 2rem auto;

  img {
    border: 2px solid black;
  }

  ${media.small`
    flex-basis:100%;    
  `};
  .title-container {
    position: absolute;
    bottom: 20%;
  }
`;
