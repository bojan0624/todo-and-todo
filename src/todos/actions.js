import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  CHANGE_TODO_TAG
} from './actionTypes';
import { randomId } from '../shared/randomId';

export const addTodo = text => ({
  type: ADD_TODO,
  completed: false,
  id: randomId(),
  text: text
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id: id
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id: id
});

export const changeTag = (id, typeId) => ({
  type: CHANGE_TODO_TAG,
  id: id,
  typeId: typeId
});
