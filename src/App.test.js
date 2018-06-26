import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  let app = shallow(<App />);
  expect(app.find('.ant-card-head-title').text()).to.equal('Todo List');
});
