import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { combineReducers, configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import createSagaMiddleware, { Task } from 'redux-saga';
import snake from './snake';
import rootSaga from './saga';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

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
  const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
    devTools: true,
  });

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(initStore);
declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
