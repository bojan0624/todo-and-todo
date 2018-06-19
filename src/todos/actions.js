import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CHANGE_TODO_TAG } from './actionTypes'

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

export const changeTag = (id, typeId) => ({
  type: CHANGE_TODO_TAG,
  id: id,
  typeId: typeId
})