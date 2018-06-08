import React from 'react'
import { connect } from 'react-redux'
import { List } from 'antd'
import TodoItem from './todoItem'
import { toggleTodo, removeTodo } from '../actions'
import { selectVisibleTodos } from '../selector'

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
    return (
      <List>
        {
          todos.length > 0 && todos.map(item => (
            <TodoItem 
              key={item.id}
              id={item.id}
              text={item.text}
              completed={item.completed}
              onToggle={() => onToggleTodo(item.id)}
              onRemove={() => onRemoveTodo(item.id)}
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

const mapDispatchToProps = dispatch => {
  return {
    onToggle: id => {
      dispatch(toggleTodo(id))
    },
    onRemoveTodo: id => {
      dispatch(removeTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)