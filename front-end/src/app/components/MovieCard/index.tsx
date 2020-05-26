/**
 *
 * MovieCard
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  poster: string;
  _id: string;
}

export const MovieCard = memo((props: Props) => {
  let { title, poster, _id } = props;
  if (!poster) {
    poster = 'https://via.placeholder.com/500';
  }

  return (
    <Div>
      <Link to={`/movies/${_id}`}>
        <img src={poster} width={300} height={300} />
      </Link>

      <section className="title-container">{title}</section>
    </Div>
  );
});

const Div = styled.div`
  display: flex;
  max-width: 300px;
  max-height: 300px;
  flex-flow: column;
  position: relative;
  margin: 2rem auto;
  &:hover {
    .title-container {
      display: block;
    }
  }

  img {
    border: 2px solid black;
  }

  @media only screen and (max-width: 600px) {
    flex-basis: 100%;
  }

  .title-container {
    display: none;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    bottom: 20%;
    color: red;
    font-size: 26px;
  }
`;
