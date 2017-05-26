import React from 'react';
import { shallow } from 'enzyme';

import Button from './button';

describe('Button', () => {
  it('renders without crashing', () => {
    const component = shallow(<Button />);
  });

  it('renders the right text', () => {
    const fn = jest.fn();
    const component = shallow(<Button text="ballers" />);
    expect(component.text()).toContain('ballers');
  });

  it('calls the action when clicked', () => {
    const fn = jest.fn();
    const component = shallow(<Button action={fn} />);
    expect(fn.mock.calls.length).toBe(0);
    component.simulate('click');
    expect(fn.mock.calls.length).toBe(1);
  });
});
