import React from 'react';
import { shallow } from 'enzyme';
import Todos from '../views/todos';
import AddTodo from '../views/addTodo';

it('should render <AddTodo /> and <TodoList /> components', () => {
  const todos = shallow(<Todos />);
  expect(todos.contains(<AddTodo />)).toBe(true);
});
