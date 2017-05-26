import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App } from './App';

it('renders without crashing', () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const initialState = {
    status: 'LOADING',
    word: '',
    answer: [],
    letters: alphabet,
    tries: 10,
  };

  const div = document.createElement('div');
  const fn = () => {};
  const component = shallow(<App game={initialState} newGame={fn} tryLetter={fn} />);
});
