import React from 'react'
import { Card } from 'antd'
import AddTodo from './addTodo'
import TodoList from './todoList'
import styles from './todos.less'

export default () => (
  <div className="todos">
    <Card
      title="Todo List"
      className={styles.todos}
    >
      <AddTodo />
      <TodoList />
    </Card>
  </div>
)