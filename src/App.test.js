import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // const fn = jest.ob();
  const component = shallow(<App />);
});
