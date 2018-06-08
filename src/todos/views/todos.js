import React from 'react'
import AddTodo from './addTodo'
import TodoList from './todoList'

export default () => (
  <div className="todos">
    <AddTodo />
    <TodoList />
  </div>
)