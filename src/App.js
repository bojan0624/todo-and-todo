import React, { Component, Fragment } from 'react';
import { view as Todos } from './todos';
import { view as Filters } from './filter';
import { view as Tags } from './tags';
import { Card, Icon, Popover } from 'antd';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSettingView: false
    };
  }

  handleSetting = () => this.setState({ showSettingView: true });

  render() {
    return (
      <Fragment>
        <Card
          title="Todo List"
          className={'todoapp'}
          extra={
            <Popover
              placement="rightBottom"
              title={'setting'}
              content={
                <div style={{ maxWidth: '170px' }}>
                  <Tags />
                </div>
              }
              trigger="click"
            >
              <Icon type="setting" onClick={this.handleSetting} />
            </Popover>
          }
        >
          <Filters />
          <Todos />
        </Card>
      </Fragment>
    );
  }
}

export default App;
