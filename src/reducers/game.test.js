import reducer from './game';
import { actions } from '../actions/game';
import status from '../constants/status';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const initialState = {
  status: status.LOADING,
  word: '',
  answer: [],
  letters: alphabet,
  tries: 6,
  imageSrc: 'http://www.writteninpencil.de/Projekte/Hangman/hangman0.png',
};

describe('Game reducer', () => {
  it('returns an initial state when no actions passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
