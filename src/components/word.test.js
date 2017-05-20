import React from 'react';
import { shallow } from 'enzyme';
import Word from './word';

describe('Word', () => {
  it('renders without crashing', () => {
    const component = shallow(<Word word='testword' />);
    expect(component.text()).toBe('testword');
  });
})
