import { delay } from "redux-saga";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";

// worker Saga: 비동기 증가 태스크를 수행할겁니다.
export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: "INCREMENT" });
}

// watcher Saga: 각각의 INCREMENT_ASYNC 에 incrementAsync 태스크를 생성할겁니다.
export function* watchIncrementAsync() {
  yield takeLatest("INCREMENT_ASYNC", incrementAsync);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
