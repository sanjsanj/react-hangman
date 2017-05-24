import React from 'react';
import { shallow } from 'enzyme';
import Word from './word';

describe('Word', () => {
  it('renders without crashing', () => {
    const word = 'ballers'.split('');
    console.log(word);
    const component = shallow(<Word word={word} />);
    expect(component.text()).toContain('ballers');
  });
});
