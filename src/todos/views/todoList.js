import React from 'react'
import { connect } from 'react-redux'
import { List } from 'antd'
import TodoItem from './todoItem'
import { FilterType } from '../../constants'
import { toggleTodo, removeTodo } from '../actions'

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

const selectVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FilterType.ALL:
      return todos
    case FilterType.COMPLETED:
      return todos.filter(v => v.completed)
    case FilterType.UNCOMPLETED:
      return todos.filter(v => !v.completed)
    default:
      throw new Error('unsupported filter')
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    todos: selectVisibleTodos(state.todos, state.filter)
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