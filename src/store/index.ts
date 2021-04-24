import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';
import directions from './directions';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  directions: directions.reducer,
});

//* 스토어의 타입
export type RootState = ReturnType<typeof rootReducer>;
//* 타입 지원되는 커스텀 useSelector 만들기
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
  devTools: true,
});
sagaMiddleware.run(rootSaga);

export default store;
