import { createSelector } from 'reselect';
import { FilterType } from '../constants';

const getFilter = state => state.filter;
const getTodos = state => state.todos;

export const selectVisibleTodos = createSelector(
  [getFilter, getTodos],
  (filter, todos) => {
    switch (filter) {
      case FilterType.ALL:
        return todos;
      case FilterType.COMPLETED:
        return todos.filter(v => v.completed);
      case FilterType.UNCOMPLETED:
        return todos.filter(v => !v.completed);
      default:
        // throw new Error('unsupported filter')
        return todos;
    }
  }
);
