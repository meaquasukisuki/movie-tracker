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
import { Comment } from '../Comment/Loadable';

interface Props extends RouteComponentProps {}

export const DetailedPage = memo((props: Props) => {
  const [detailedData, setDetailedData] = useState({
    movie: { poster: undefined, title: '', plot: '', genres: [] },
    comments: [
      {
        _id: '',
        name: '',
        email: '',
        movie_id: '',
        text: '',
      },
    ],
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
  console.log(detailedData);

  // @ts-ignore
  return loadingState ? (
    <LoadingComponent />
  ) : (
    <Container>
      <div className="tags">
        tag:{' '}
        {detailedData.movie.genres.map(genre => {
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
        <div>title: {detailedData.movie.title}</div>
        <div>description: {detailedData.movie.plot}</div>
      </div>
      <div className="comments">
        <div>comments:</div>
        {detailedData.comments.map(comment => {
          return <Comment key={comment._id} {...comment} />;
        })}
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
  .info {
    margin-top: 3rem;
  }

  .comments {
    margin-top: 3rem;
  }

  @media screen and (max-width: 720px) {
    font-size: 2rem;
    .image-container {
      width: 100%;
      & > img {
        width: 100%;
        height: 500px;
      }
    }
    .tags {
      margin-left: 4rem;
      margin-top: 2rem;
    }
    .comments {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 720px) {
    font-size: 2rem;
    .image-container {
      width: 50%;
      & > img {
        width: 100%;
        height: 500px;
      }
    }
    .info {
      width: 50%;
    }
    .comments {
      width: 40%;
    }
  }
`;
