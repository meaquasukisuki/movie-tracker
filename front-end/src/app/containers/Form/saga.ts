import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';

import { selectForm } from './selectors';
import axiosInstance from 'app/axios/axios.config';

function* signInWorkSaga() {
  const formState = yield select(selectForm);

  try {
    const signInData = yield axiosInstance
      .post('/users/signin', {
        ...formState.userState,
      })
      .then(res => {
        return res.data;
      });

    yield put({
      type: actions.signInSuccess.type,
      payload: {
        userData: signInData,
      },
    });
    
    // console.log(formState);
  } catch (error) {
    yield put({
      type: actions.signInFailure.type,
      payload: {
        error,
      },
    });
  }
}

function* signOutWorkSaga() {
  try {
    const formState = yield select(selectForm);
    yield axiosInstance.post('/users/signout', {
      ...formState.userState,
    });
    yield put({
      type: actions.signOutSuccess.type,
    });
  } catch (error) {
    yield put({
      type: actions.signOutFailure.type,
      payload: {
        error,
      },
    });
  }
}

export function* formSaga() {
  yield takeLatest(actions.signInStart.type, signInWorkSaga);
  yield takeLatest(actions.signOutStart.type, signOutWorkSaga);
}
