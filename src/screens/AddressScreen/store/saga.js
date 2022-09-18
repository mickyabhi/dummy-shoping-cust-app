import {put, takeLatest} from 'redux-saga/effects';
import {actions, testFunction} from './actions';

function* setAlert() {
  yield put(testFunction());
}

function* sagas() {
  yield takeLatest(actions.SET_ALERT, setAlert);
}

export default sagas;
