import { NextApiRequest, NextApiResponse } from 'next';
import Data from '../../../lib/data';
import todo from '../../todo/add';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PATCH') {
    try {
      const todoId = Number(req.query.id);
      const todos = Data.todo.getList();
      const changedTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
      Data.todo.write(changedTodos);
      res.statusCode = 200;
      res.end();
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }

  if (req.method === 'DELETE') {
    try {
      const todoId = Number(req.query.id);
      const todos = Data.todo.getList();
      const changedTodos = todos
        .filter((todo) => {
          return todo.id !== todoId;
        })
        .map((todo, i) => {
          return { ...todo, id: i };
        });
      Data.todo.write(changedTodos);
      res.statusCode = 200;
      res.end();
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }

  res.statusCode = 405;
  return res.end();
};
