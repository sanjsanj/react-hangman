import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const initialState = {
      status: '',
      word: '',
      answer: [],
      letters: alphabet,
      tries: 6,
      imageSrc: '',
    };

    const div = document.createElement('div');
    const fn = jest.fn();
    const component = shallow(<App game={initialState} newGame={fn} tryLetter={fn} />);
  });
});
