import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import snake from './snake';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  snake: snake.reducer,
});

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  }
  return rootReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

const initStore = () => {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
    devTools: true,
  });
};

export const wrapper = createWrapper(initStore);
declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
