import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Spin } from 'antd';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import initStore from './Store';

const { store, persistor } = initStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Spin />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
