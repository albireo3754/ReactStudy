import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import styled from 'styled-components';
import TodoList from '../components/TodoList';
import { TodoType } from '../types/todo';
import { getTodosAPI } from './api/todos';

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

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(process.env);
  try {
    const { data } = await getTodosAPI();
    return { props: { todos: data } };
  } catch (e) {
    return { props: { todos: [] } };
  }
};
export default index;
