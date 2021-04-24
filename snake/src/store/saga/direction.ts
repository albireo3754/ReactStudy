import { createAction, PayloadAction } from '@reduxjs/toolkit';
import {
  all,
  call,
  delay,
  fork,
  put,
  select,
  take,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { directionsActions } from '../directions';
import { DIRECTION } from '../../components/Snake';
import { TDirection } from '../../types/store';
import _ from 'lodash';
export const appendHeadAsync = createAction('APPEND_HEAD_ASYNC');
export const popTailAsync = createAction('POP_TAIL_ASYNC');
export const changeDirection = createAction<number>('CHANGE_DIRECTION');
export const startGame = createAction('START_GAME');

function findRandom(
  directions: TDirection[][],
  random: number
): [number, number] {
  console.log(random);
  let count = 0;
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      console.log(count);
      if (directions[i][j] === -1) {
        count++;
        if (count === random) {
          return [i, j];
        }
      }
    }
  }
  return [0, 0];
}

function* setFoodSaga() {
  const directions = (yield select(
    (state) => state.directions.directions
  )) as TDirection[][];

  const rest = (yield select((state) => state.directions.rest)) as number;
  if (rest > 0) {
    const [row, col] = findRandom(directions, _.random(1, rest));
    yield put(
      directionsActions.changeDirection({
        row,
        col,
        direction: -3,
      })
    );
  }
}

function* popTailSaga() {
  // 방향 확인
  // 방향이 바꼇을 경우에 반영해주기 위함
  const tail = (yield select((state) => state.directions.tail)) as [
    number,
    number
  ];
  const directions = (yield select(
    (state) => state.directions.directions
  )) as TDirection[][];
  const tailDirection = directions[tail[0]][tail[1]];

  const newTail = tail.map((x, i) => x + DIRECTION[tailDirection][i]) as [
    number,
    number
  ];

  yield put(
    directionsActions.changeDirection({
      row: tail[0],
      col: tail[1],
      direction: TDirection.background,
    })
  );
  yield put(directionsActions.setTail(newTail));
}

function* appendHeadSaga() {
  const directions = (yield select(
    (state) => state.directions.directions
  )) as TDirection[][];
  // 방향 확인
  const direction = (yield select(
    (state) => state.directions.direction
  )) as number;
  // 방향이 바꼇을 경우에 반영해주기 위함
  const head = (yield select((state) => state.directions.head)) as [
    number,
    number
  ];
  yield put(
    directionsActions.changeDirection({
      row: head[0],
      col: head[1],
      direction,
    })
  );
  // [a, b] + [1, 0] 등
  const newHead = head.map((x, i) => x + DIRECTION[direction][i]) as [
    number,
    number
  ];
  yield put(
    directionsActions.changeDirection({
      row: newHead[0],
      col: newHead[1],
      direction,
    })
  );

  yield put(directionsActions.setHead(newHead));
  switch (directions[newHead[0]][newHead[1]]) {
    case -3:
      yield put(directionsActions.setRest());
      yield call(setFoodSaga);
      break;
    case 0:
    case 1:
    case 2:
    case 3:
    case undefined:
      console.log('hi?');
      yield put(directionsActions.reset());
      yield call(alert, '실패했어요~');
      yield put(startGame());
      break;
    case -1:
      yield call(popTailSaga);
      break;
    default:
      break;
  }
}

function* changeDirectionSaga(action: PayloadAction<number>) {
  const direction = (yield select(
    (state) => state.directions.direction
  )) as number;
  if (direction % 2 !== action.payload % 2) {
    console.log(direction, action.payload);
    yield put(directionsActions.setDirection(action.payload));
    yield call(appendHeadSaga);
    yield put(startGame());
  }
}

function* startGameSaga() {
  while (true) {
    yield delay(1000);
    yield call(appendHeadSaga);
  }
}

function* watchDirection() {
  yield takeEvery(changeDirection.type, changeDirectionSaga);
  yield takeLatest(startGame.type, startGameSaga);
  // yield takeLatest(popTailAsync.type, popTailSaga);
  // yield takeLatest(appendHeadAsync.type, appendHeadSaga);
}

export default function* directionSaga() {
  yield all([fork(watchDirection)]);
}
