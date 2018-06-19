import React from 'react'
import { connect } from 'react-redux'
import { List } from 'antd'
import TodoItem from './todoItem'
import { selectVisibleTodos } from '../selector'
import FlipMove from 'react-flip-move'

const _animeConfig = {
  duration: 250,
  delay: 0,
  easingPreset: { value: '0.25,0.1,0.25,1.0',   label: 'ease' },
  easingValues: ['0.25','0.1','0.25','1.0'],
  staggerDelayBy: 20,
  staggerDurationBy: 15,
  preset: 0
}

const _formatEasing = () => `cubic-bezier(${ _animeConfig.easingValues.join(',') })`

const TodoList = ({todos}) => (
  <List>
    <FlipMove 
      enterAnimation='accordionHorizontal'
      leaveAnimation={false}
      duration={_animeConfig.duration}
      delay={_animeConfig.delay}
      staggerDelayBy={_animeConfig.staggerDelayBy}
      staggerDurationBy={_animeConfig.staggerDurationBy}
      easing={_formatEasing()}
    >
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
    </FlipMove>
  </List>
)

const mapStateToProps = state => {
  return {
    todos: selectVisibleTodos(state)
  }
}

export default connect(mapStateToProps)(TodoList)