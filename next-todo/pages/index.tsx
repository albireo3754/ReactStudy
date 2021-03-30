import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
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

const index: NextPage<IProps> = ({ todos }) => {
  // console.log(process.env, '클라');
  return <TodoList todos={todos} />;
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  console.log(store);
  try {
    const { data } = await getTodosAPI();
    store.dispatch(todoActions.setTodo(data));
    return { props: { todos: data } };
  } catch (e) {
    return { props: { todos: [] } };
  }
});
export default index;
