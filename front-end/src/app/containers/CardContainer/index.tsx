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
import { LoadingComponent } from '../LoadingComponent';

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
  const { loading, page, limit, sortMethod } = cardContainer;
  
  
  
  useEffect(() => {
    dispatch({
      type: actions.fetchMovieStart.type,
    });
    return () => {
      console.log('clean up');
    };
  }, []);

  const onDisplayChangeHandler = e => {
    dispatch({
      type: actions.setMoviesCount.type,
      payload: {
        limit: e.target.value,
      },
    });
    dispatch({
      type: actions.fetchMovieStart.type,
    });
  };

  const onSortMethodChangeHandler: (any) => void = e => {
    switch (e.target.value) {
      case 'runtime':
        dispatch({
          type: actions.sortMoviesData.type,
          payload: 'runtime',
        });
        break;
      case 'rating':
        dispatch({
          type: actions.sortMoviesData.type,
          payload: 'rating',
        });
        break;

      case 'release time':
        dispatch({
          type: actions.sortMoviesData.type,
          payload: 'release time',
        });
        break;

      default:
        return;
    }
    console.log(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>CardContainer</title>
        <meta name="description" content="Description of CardContainer" />
      </Helmet>

      <Form>
        <Label>
          One page display :
          <Select value={limit} onChange={onDisplayChangeHandler}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={100}>100</option>
          </Select>
        </Label>
        <Label>
          Sort By:
          <Select value={sortMethod} onChange={onSortMethodChangeHandler}>
            <option value="runtime">runtime</option>
            <option value="rating">rating</option>
            <option value="comments">comments</option>
            <option value="release time">release time</option>
          </Select>
        </Label>
      </Form>

      <Div>
        {loading ? (
          <LoadingComponent/>
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
  color: white;
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
  color: white;
  font-size: 2rem;
  align-self: center;
`;

const Form = styled.form`
  color: white;
  display: flex;
  justify-content: flex-start;
  font-size: 2rem;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Label = styled.label`
  @media only screen and (max-width: 500px) {
    &:nth-last-child(1) {
      margin-top: 1rem;
    }
  }
`;

const Select = styled.select`
  margin-left: 1rem;
  width: 8rem;
`;
