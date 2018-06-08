import React from 'react'
import { connect } from 'react-redux'
import { List, Checkbox } from 'antd'
import { toggleTodo } from '../actions'

const TodoItem = ({onToggle, id, onRemove, completed, text}) => {
  return (
    <List.Item
      actions={
        [<a onClick={onRemove}>remove</a>]
      }
    >
      <Checkbox checked={completed} onClick={() => {onToggle(id)}}/>
      <div style={{marginLeft: '10px', textDecoration: completed? 'line-through': 'none'}}>{text}</div>
    </List.Item>
  ) 
}

const mapDispatchToProps = dispatch => {
  return {
    onToggle: id => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(TodoItem)