import axios from '../../../pages/api';
import { TodoType } from '../../../types/todo';

interface AddTodoApiBody {
  text: string;
  color: TodoType['color'];
}

export const checkTodoApi = (id: number) => axios.patch(`api/todos/${id}`);

export const addTodoApi = (body: AddTodoApiBody) => {
  axios.post('/api/todos', body);
};

export const deleteTodoApi = (id: number) => axios.delete(`api/todos/${id}`);
