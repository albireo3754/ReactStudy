import styled from 'styled-components';
import { FC, useMemo, useState } from 'react';
import { TodoType } from '../types/todo';
import palette from '../styles/palette';
import TrashCanIcon from '../public/statics/svg/trash_can.svg';
import CheckMarkIcon from '../public/statics/svg/check_mark.svg';
import { checkTodoApi, deleteTodoApi } from '../lib/api/todo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { todoActions } from '../store/todo';

const Container = styled.div`
  font-family: 'Gaegu', cursive;
  width: 100%;

  .todo-list-header {
    padding: 12px;
    border-bottom: 1px solid ${palette.gray};
    .todo-list-last-todo {
      font-size: 14px;
      span {
        margin-left: 8px;
      }
    }
    .todo-list-header-colors {
      display: flex;
      .todo-list-header-color-num {
        display: flex;
        margin-right: 8px;
        p {
          font-size: 14px;
          line-height: 16px;
          margin: 0;
          margin-left: 6px;
        }
        .todo-list-header-round-color {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }
      }
    }
  }
  .bg-blue {
    background-color: ${palette.blue};
  }
  .bg-green {
    background-color: ${palette.green};
  }
  .bg-navy {
    background-color: ${palette.navy};
  }
  .bg-orange {
    background-color: ${palette.orange};
  }
  .bg-red {
    background-color: ${palette.red};
  }
  .bg-yellow {
    background-color: ${palette.yellow};
  }

  .todo-list {
    .todo-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 52px;
      border-bottom: 1px solid ${palette.gray};

      .todo-left-side {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        .todo-color-block {
          width: 12px;
          height: 100%;
        }
      }

      .todo-right-side {
        display: flex;
        margin-right: 12px;
        svg {
          &:first-child {
            margin-right: 16px;
          }
        }
        .todo-trash-can {
          path {
            fill: ${palette.deep_red};
          }
        }
        .todo-check-mark {
          path {
            fill: ${palette.deep_green};
          }
        }

        .todo-button {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid ${palette.gray};
          background-color: transparent;
          outline: none;
        }
      }

      .checked-todo-text {
        color: ${palette.gray};
        text-decoration: line-through;
      }

      .todo-text {
        margin-left: 12px;
        font-size: 16px;
      }
    }
  }
`;

interface IProps {
  todos: TodoType[];
}

interface ColorNumsType {
  [key: string]: number | undefined;
}

const getTodoColorNums = (todos: TodoType[]): ColorNumsType => {
  let red = 0;
  let orange = 0;
  let yellow = 0;
  let green = 0;
  let blue = 0;
  let navy = 0;
  todos.forEach((todo) => {
    switch (todo.color) {
      case 'red':
        red += 1;
        break;
      case 'orange':
        orange += 1;
        break;
      case 'yellow':
        yellow += 1;
        break;
      case 'green':
        green += 1;
        break;
      case 'blue':
        blue += 1;
        break;
      case 'navy':
        navy += 1;
        break;
      default:
        break;
    }
  });
  return { red, orange, yellow, green, blue, navy };
};

const TodoList: FC<IProps> = () => {
  // const [localTodos, setLocalTodos] = useState(todos);
  const localTodos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const checkTodo = async (id: number) => {
    try {
      await checkTodoApi(id);
      console.log('체크하였습니다.');
      const newTodos = localTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
      dispatch(todoActions.setTodo(newTodos));
      console.log(localTodos);
    } catch (e) {
      console.log(e);
    }
  };
  const deleteTodo = async (id: number) => {
    try {
      await deleteTodoApi(id);
      const newTodos = localTodos
        .filter((todo) => todo.id !== id)
        .map((todo, i) => {
          return { ...todo, id: i };
        });
      dispatch(todoActions.setTodo(newTodos));
      console.log('삭제가 완료됬습니다.');
    } catch (e) {
      console.log(e);
    }
  };
  const todoColorNums = useMemo(() => getTodoColorNums(localTodos), [localTodos]);
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('hi'), 5000);
  });
  return (
    <Container>
      <div className='todo-list-header'>
        <p className='todo-list-last-todo'>
          남은 TODO <span>{localTodos.length}개</span>
        </p>
        <div className='todo-list-header-colors'>
          {Object.keys(todoColorNums).map((color, i) => {
            return (
              !!todoColorNums[color] && (
                <div className='todo-list-header-color-num' key={i}>
                  <div className={`todo-list-header-round-color bg-${color}`} />
                  <p>{todoColorNums[color]}개</p>
                </div>
              )
            );
          })}
        </div>
      </div>
      <ul className='todo-list'>
        {localTodos.map((todo) => (
          <li className='todo-item' key={todo.id}>
            <div className='todo-left-side'>
              <div className={`todo-color-block bg-${todo.color}`} />
              <p className={`todo-text ${todo.checked ? 'checked-todo-text' : ''}`}>{todo.text}</p>
            </div>
            <div className='todo-right-side'>
              {todo.checked ? (
                <>
                  <TrashCanIcon
                    className='todo-trash-can'
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  />
                  <CheckMarkIcon className='todo-check-mark' onClick={() => checkTodo(todo.id)} />
                </>
              ) : (
                <button type='button' className='todo-button' onClick={() => checkTodo(todo.id)} />
              )}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
