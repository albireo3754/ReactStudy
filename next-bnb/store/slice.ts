import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AnyReduxState {}

const initialState: AnyReduxState = {
  any: [],
};

const any = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setAny(state, action: PayloadAction<any>) {
      state = action.payload;
    },
  },
});

export const anyActions = { ...any.actions };

export default any;
