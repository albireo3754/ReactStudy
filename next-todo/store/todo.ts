import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoType } from '../types/todo';

// export const SET_TODO_LIST = 'todo/SET_TODO_LIST';
// export const setTodo = (payload: TodoType[]) => {
//   return {
//     type: SET_TODO_LIST,
//     payload,
//   };
// };

// export const todoActions = { setTodo };

interface TodoReduxState {
  todos: TodoType[];
}

const initialState: TodoReduxState = {
  todos: [],
};

const todo = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodo(state, action: PayloadAction<TodoType[]>) {
      state.todos = action.payload;
    },
  },
});

export const todoActions = { ...todo.actions };

export default todo;
// export default function reducer(state = initialState, action: any) {
//   switch (action.type) {
//     case SET_TODO_LIST: {
//       const newState = { ...state, todos: action.payload };
//       return newState;
//     }
//     default:
//       return state;
//   }
// }
