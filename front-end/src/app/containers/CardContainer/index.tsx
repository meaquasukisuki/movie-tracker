/**
 *
 * CardContainer
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectCardContainer } from './selectors';
import { cardContainerSaga } from './saga';
import { media } from 'styles/media';
import { MovieCard } from 'app/components/MovieCard';

interface Props {
  page: number;
  limit: number;
}

export const CardContainer = memo(() => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: cardContainerSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cardContainer = useSelector(selectCardContainer);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const { loading, page, limit } = cardContainer;

  useEffect(() => {
    dispatch({
      type: actions.fetchMovieStart.type,
    });
    return () => {
      console.log('clean up');
    };
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>CardContainer</title>
        <meta name="description" content="Description of CardContainer" />
      </Helmet>
      <Div>
        {loading ? (
          <div>Loading!!!!!</div>
        ) : (
          cardContainer.moviesData.map(movieData => {
            const id = movieData._id;
            return <MovieCard key={id} {...movieData} />;
          })
        )}
      </Div>
      <ButtonGroup>
        <Button
          onClick={() => {
            dispatch({
              type: actions.previousPageStart.type,
            });
            dispatch({
              type: actions.fetchMovieStart.type,
            });
          }}
          disabled={page > 1 ? false : true}
        >
          Previous
        </Button>
        <PageInfo>current page: {cardContainer.page}</PageInfo>
        <Button
          onClick={() => {
            dispatch({
              type: actions.nextPageStart.type,
            });
            dispatch({
              type: actions.fetchMovieStart.type,
            });
          }}
        >
          Next
        </Button>
      </ButtonGroup>
    </>
  );
});

// styled components

const Div = styled.main`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  ${media.small`
    display:flex;
    flex-flow:column,wrap;
    width:100%;
    height:100%;    
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Button = styled.button`
  color: white;
  font-size: 2rem;
  background-color: black;
  width: 15rem;
  cursor: pointer;
  border: 3rem;
  border-radius: 0.45;
`;

const PageInfo = styled.div`
  font-size: 2rem;
  align-self: center;
`;
