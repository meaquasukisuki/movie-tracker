/**
 *
 * LoadingComponent
 *
 */

import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectLoadingComponent } from './selectors';
import { loadingComponentSaga } from './saga';

export const LoadingComponent = memo(props => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loadingComponentSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loadingComponent = useSelector(selectLoadingComponent);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Div>
        <div className="loader"></div>
      </Div>
    </>
  );
});

const Div = styled.div`
  width: 100%;
  height: 100%;
  background-color: whitesmoke;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }
`;
