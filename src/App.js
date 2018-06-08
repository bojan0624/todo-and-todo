import React, { Component } from 'react'
import { view as Todos } from './todos'
import { view as Filters } from './filter'
import {Card} from 'antd'
import './App.css'
class App extends Component {
  render() {
    return (
      <Card
        title="Todo List"
        className={'todoapp'}
      >
        <Filters />
        <Todos />
      </Card>
    )
  }
}

export default App
