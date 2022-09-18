import {all} from 'redux-saga/effects';
import appSaga from '../screens/AppStore/saga';
export default function* sagas() {
  yield all([appSaga()]);
}
