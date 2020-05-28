// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { actions } from './slice';

// export function* doSomething() {}
import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';

import { selectSignUpForm } from './selectors';
import axiosInstance from 'app/axios/axios.config';


function* signUpWorkSaga() {
  const signUpFormState = yield select(selectSignUpForm);
  try {
    const signUpData = yield axiosInstance
      .post('/users/signup', {
        ...signUpFormState.userData,
      })
      .then(res => res.data);
    console.log('signUpData', signUpData);

    yield put({
      type: actions.signUpSuccess.type,
    });
  } catch (error) {
    yield put({
      type: actions.signUpFailure.type,
      payload: {
        error,
      },
    });
  }
}

export function* signUpFormSaga() {
  yield takeLatest(actions.signUpStart.type, signUpWorkSaga);
  // yield takeLatest(actions.someAction.type, doSomething);
}
