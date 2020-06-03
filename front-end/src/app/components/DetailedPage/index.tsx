/**
 *
 * DetailedPage
 *
 */
import React, { memo, useEffect, useState, FormEvent } from 'react';
import styled from 'styled-components/macro';
import axiosInstance from 'app/axios/axios.config';
import { RouteComponentProps } from 'react-router-dom';
import MovieTypes from './MovieTypes';
import { LoadingComponent } from 'app/containers/LoadingComponent';
import { Comment } from '../Comment/Loadable';
import { selectForm } from 'app/containers/Form/selectors';
import { useSelector } from 'react-redux';

interface Props extends RouteComponentProps {}

export const DetailedPage = memo((props: any) => {
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

  const formState = useSelector(selectForm);

  const [loadingState, setLoadingState] = useState(false);

  const [formInput, setFormInput] = useState('');

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
  // console.log(detailedData);

  const onFormClick = (e: FormEvent) => {
    e.preventDefault();

    axiosInstance
      .post(`movies/${props.match.params.id}`, {
        ...formState.userState,
        text: formInput,
      })
      .then(res => {
        console.log(res.data);
        return res.data;
      });

    props.history.push(`/movies/${props.match.params.id}`);

    // location.reload();
  };

  const onInputChange = e => {
    setFormInput(e.target.value);
  };

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
      {formState.isSignedIn ? (
        <div className="formContainer">
          <form onSubmit={onFormClick}>
            <textarea
              name="comment"
              id="comment"
              className="textarea"
              onChange={onInputChange}
              value={formInput}
            ></textarea>
            <button type="submit" onClick={onFormClick}>
              Post
            </button>
          </form>
        </div>
      ) : (
        <div>Please first sign in then comment!!!</div>
      )}
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  .textarea {
    margin-top: 5rem;
    border: #00b7ff 0.5rem solid;
  }
  .image-container {
    margin-top: 50px;
  }
  .info {
    margin-top: 3rem;
  }

  .comments {
    margin-top: 3rem;
  }

  /* .textarea {
    width: 100%;
    height: 500px;
  } */

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
    .textarea {
      width: 100%;
      height: 200px;
      font-size: 2rem;
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
      width: 50%;
    }
  }
`;
