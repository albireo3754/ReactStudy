import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TDirection } from '../components/Snake/config';

const initialDirections = Array.from(Array(15), () => {
  return Array.from(Array(15), () => TDirection.background);
});

initialDirections[0][0] = TDirection.down;
initialDirections[1][0] = TDirection.down;
initialDirections[8][8] = TDirection.food;

const initialState = {
  ROW: 15,
  COL: 15,
  directions: initialDirections,
  head: [1, 0],
  tail: [0, 0],
  direction: 2,
  rest: 15 * 15 - 2,
};

const snake = createSlice({
  name: 'snake',
  initialState,
  reducers: {
    changeDirection(
      state,
      action: PayloadAction<{
        row: number;
        col: number;
        direction: TDirection;
      }>,
    ) {
      state.directions[action.payload.row][action.payload.col] = action.payload.direction;
    },
    setRow(state, action: PayloadAction<number>) {
      state.ROW = action.payload;
    },
    setCol(state, action: PayloadAction<number>) {
      state.COL = action.payload;
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

export const snakeActions = { ...snake.actions };

export default snake;
