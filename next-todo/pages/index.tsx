import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import styled from 'styled-components';
import TodoList from '../components/TodoList';
import { TodoType } from '../types/todo';
import { getTodosAPI } from './api/todos';

const Container = styled.div`
  font-style: italic;
`;

const todos: TodoType[] = [
  { id: 1, text: '마트가기', color: 'red', checked: false },
  { id: 2, text: '숙제하기', color: 'orange', checked: true },
];

const index: NextPage = () => {
  return <TodoList todos={todos} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await getTodosAPI();
    console.log(res, 'hi');
    console.log('hi??');
    return { props: {} };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};
export default index;
