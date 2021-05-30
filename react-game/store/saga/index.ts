import { all } from 'redux-saga/effects';
import snakeSaga from './snake';

export function* rootSaga() {
  console.log('rootsaga 작동완료?');
  yield all([snakeSaga()]); // all은 배열안의 여러 사가를 동시에 실행시킨다.
}
export default rootSaga;
