import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, ADD_TODO_TAG } from './actionTypes'

let nextTodoId = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  completed: false,
  id: nextTodoId++,
  text: text
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id: id
})

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id: id
})

export const addTodoTag = (id, typeId) => ({
  type: ADD_TODO_TAG,
  id: id,
  typeId: typeId
})