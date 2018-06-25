import React, { Component } from 'react';
import { view as Todos } from './todos';
import { view as Filters } from './filter';
import { view as Tags } from './tags';
import { Card, Icon, Popover } from 'antd';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Spin } from 'antd';
import initStore from './Store';
import './App.css';
const { store, persistor } = initStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSettingView: false
    };
  }

  handleSetting = () => this.setState({ showSettingView: true });

  renderView() {
    return (
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
    );
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Spin />} persistor={persistor}>
          {this.renderView()}
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
