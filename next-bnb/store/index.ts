import { createWrapper, HYDRATE, MakeStore } from 'next-redux-wrapper';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from './user';
import common from './common';
import registerRoom from './registerRoom';
import auth from './auth';
import searchRoom from './searchRoom';

const rootReducer = combineReducers({
  user: user.reducer,
  common: common.reducer,
  registerRoom: registerRoom.reducer,
  auth: auth.reducer,
  searchRoom: searchRoom.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
let initialRootState: RootState;

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return rootReducer(state, action);
};

const initStore: MakeStore = () => {
  const store = configureStore({
    reducer,
    devTools: true,
  });
  initialRootState = store.getState();
  return store;
};

export const wrapper = createWrapper(initStore);

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
