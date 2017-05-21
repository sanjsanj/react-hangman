import React from 'react';
import { shallow } from 'enzyme';
import Word from './word';

describe('Word', () => {
  it('renders without crashing', () => {
    const fn = jest.fn();
    const component = shallow(<Word fetchRequest={fn} word="palomino" />);
    expect(component.text()).toContain('palomino');
  });

  it('calls the action when clicked', () => {
    const fn = jest.fn();
    const component = shallow(<Word fetchRequest={fn} word="" />);
    expect(fn.mock.calls.length).toBe(0);
    component.find('button').simulate('click');
    expect(fn.mock.calls.length).toBe(1);
  });
});
