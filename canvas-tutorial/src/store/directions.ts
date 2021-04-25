import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { COL, ROW } from '../components/Snake';
import { TDirection } from '../types/store';

//* 초기 상태

const initialDirections = Array.from(Array(15), () => {
  return Array.from(Array(15), () => TDirection.background);
});

initialDirections[0][0] = TDirection.down;
initialDirections[1][0] = TDirection.down;
initialDirections[8][8] = TDirection.food;
const initialState: {
  directions: TDirection[][];
  head: [number, number];
  tail: [number, number];
  direction: number;
  rest: number;
} = {
  directions: initialDirections,
  head: [1, 0],
  tail: [0, 0],
  direction: 2,
  rest: 15 * 15 - 2,
};

const directions = createSlice({
  name: 'directions',
  initialState,
  reducers: {
    changeDirection(
      state,
      action: PayloadAction<{
        row: number;
        col: number;
        direction: TDirection;
      }>
    ) {
      state.directions[action.payload.row][action.payload.col] =
        action.payload.direction;
    },
    setHead(state, action: PayloadAction<[number, number]>) {
      state.head = action.payload;
    },
    setTail(state, action: PayloadAction<[number, number]>) {
      state.tail = action.payload;
    },
    setDirection(state, action: PayloadAction<number>) {
      state.direction = action.payload;
    },
    setRest(state) {
      state.rest -= 1;
    },
    reset: () => initialState,
  },
});

export const directionsActions = { ...directions.actions };

export default directions;
