import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { formSelect } from './index';

const type = formSelect.formType;

export function* signUpWorkSaga() {}

export function* signInWorkSaga() {}

export function* formSaga() {
  if (type == 'signup') {
    yield takeLatest(actions.signUpStart.type, signUpWorkSaga);
  } else if (type == 'signin') {
    yield takeLatest(actions.signInStart.type, signInWorkSaga);
  }
}
