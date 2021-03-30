import { NextPage } from 'next';
import styled from 'styled-components';
import TodoList from '../components/TodoList';
import { TodoType } from '../types/todo';
import { getTodosAPI } from './api/todos';
import { wrapper } from '../store';
import { todoActions } from '../store/todo';
interface IProps {
  todos: TodoType[];
}

const Container = styled.div`
  font-style: italic;
`;

const index: NextPage = () => {
  // console.log(process.env, '클라');
  return <TodoList />;
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  console.log(store);
  try {
    const { data } = await getTodosAPI();
    store.dispatch(todoActions.setTodo(data));
    // return { props: {} };
  } catch (e) {
    // return { props: {} };
  }
});
export default index;
