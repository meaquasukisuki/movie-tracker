import {
  take,
  call,
  put,
  select,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import { actions } from './slice';
import axiosInstance from 'app/axios/axios.config';
import { selectCardContainer } from './selectors';

export function* fetchMovies() {
  const state = yield select(selectCardContainer);
  const { page, limit } = state;
  try {
    const moviesData = yield axiosInstance
      .get(`/movies/?page=${page}&limit=${limit}`)
      .then(res => res.data);
    yield put({
      type: actions.fetchMovieSuccess.type,
      payload: moviesData,
    });
    yield put({
      type: actions.sortMoviesData.type,
      payload: state.sortMethod,
    });
  } catch (error) {
    yield put({
      type: actions.fetchMovieFailure.type,
      payload: error,
    });
  }
}

export function* previousPageWorker() {
  // yield put({
  //   type: actions.previousPageStart.type,
  // });
  yield put({
    type: actions.fetchMovieStart.type,
  });
}

export function* cardContainerSaga() {
  yield takeLatest(actions.fetchMovieStart.type, fetchMovies);
  // takeLatest(actions.previousPageStart.type, previousPageWorker),

  // yield takeLatest(actions.fetchMovieStart.type, fetchMovies);
  // yield takeLatest(actions.previousPageStart.type, previousPageWorker);
}
