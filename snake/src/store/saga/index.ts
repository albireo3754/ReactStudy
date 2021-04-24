import { all } from 'redux-saga/effects';
import directionSaga from './direction';

export function* rootSaga() {
  yield all([directionSaga()]); // all은 배열안의 여러 사가를 동시에 실행시킨다.
}
export default rootSaga;
