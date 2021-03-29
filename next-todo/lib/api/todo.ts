import axios from '../../pages/api';

export const checkTodoApi = (id: number) => axios.patch(`api/todos/${id}`);
