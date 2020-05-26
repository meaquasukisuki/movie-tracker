/**
 *
 * DetailedPage
 *
 */
import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import axiosInstance from 'app/axios/axios.config';
import { RouteComponentProps } from 'react-router-dom';
import MovieTypes from './MovieTypes';
import { LoadingComponent } from 'app/containers/LoadingComponent';

interface Props extends RouteComponentProps {}

export const DetailedPage = memo((props: Props) => {
  const [detailedData, setDetailedData] = useState({
    movie: { poster: undefined, title: '', plot: '', genres: [] },
    comments: [],
  });

  const [loadingState, setLoadingState] = useState(false);
  useEffect(() => {
    (async () => {
      setLoadingState(true);

      const data = await axiosInstance
        .get(props.match.url)
        .then(res => res.data);

      setDetailedData(data);
      setLoadingState(false);
    })();

    return () => {
      console.log('clean up!');
    };
  }, []);
  console.log(detailedData.movie);

  // @ts-ignore
  return loadingState ? (
    <LoadingComponent />
  ) : (
    <Container>
      <div className="tags">
        tag: {detailedData.movie.genres.map(genre => {
          return <span>{genre} </span>;
        })}
      </div>
      <div className="image-container">
        <img
          className="image"
          src={
            detailedData.movie.poster
              ? detailedData.movie.poster
              : 'https://via.placeholder.com/150'
          }
          alt={'movie image'}
        />
      </div>
      <div className="info">
        <div>{detailedData.movie.title}</div>
        <div>{detailedData.movie.plot}</div>
      </div>
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  .image-container {
    margin-top: 50px;
  }
  
  @media screen and (max-width: 720px) {
    .image-container {
      width: 100%;
      & > img {
        width: 100%;
        height: 500px;
      }
    }
  }
`;
