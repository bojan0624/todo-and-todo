import React from 'react'
import { connect } from 'react-redux'
import { List } from 'antd'
import TodoItem from './todoItem'
import { selectVisibleTodos } from '../selector'

const TodoList = ({todos}) => {
    return (
      <List>
        {
          todos.length > 0 && todos.map(item => (
            <TodoItem 
              key={item.id}
              id={item.id}
              text={item.text}
              completed={item.completed}
              typeId={item.typeId}
            />
          ))
        }
      </List>
    )
}

const mapStateToProps = state => {
  return {
    todos: selectVisibleTodos(state)
  }
}

export default connect(mapStateToProps)(TodoList)