import React, { Component, Fragment } from 'react';
import { view as Todos } from './todos';
import './App.css';
class App extends Component {
  render() {
    return (
      <Fragment>
        <Todos />
      </Fragment>
    );
  }
}

export default App;
