import { createWrapper, HYDRATE, MakeStore } from 'next-redux-wrapper';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from './user';

const rootReducer = combineReducers({
  user: user.reducer,
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
  console.log(initialRootState);
  return store;
};

export const wrapper = createWrapper(initStore);
declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
