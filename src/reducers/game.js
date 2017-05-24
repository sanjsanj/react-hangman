import { types } from '../actions/game';
import status from '../constants/status';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const initialState = {
  status: status.LOADING,
  word: '',
  answer: [],
  letters: alphabet,
  tries: 10,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.NEW_GAME_REQUEST:
      return {
        ...state,
        status: status.LOADING,
      };
    case types.NEW_GAME_SUCCESS:
      return {
        ...state,
        word: action.word,
        status: status.PLAYING,
        answer: action.word.split('').map(() => '_'),
        tries: initialState.tries,
        letters: initialState.letters,
      };
    case types.TRY_LETTER:
      if (state.letters.indexOf(action.letter) > -1) {
        if (state.word.indexOf(action.letter) > -1) {
          // success
          return {
            ...state,
            letters: state.letters.filter(letter => letter !== action.letter),
            answer: state.answer.map((letter, index) => {
              if (state.word[index] === action.letter) {
                return action.letter;
              }
              return letter;
            }),
            // status: state.answer.indexOf('_') < 0 ? status.WON : status.PLAYING,
          };
        }
        // failure
        return {
          ...state,
          letters: state.letters.filter(letter => letter !== action.letter),
          tries: state.tries - 1,
          // status: state.tries === 1 ? status.LOST : status.PLAYING,
        };
      }
      return state;
    case types.CHECK_GAME_STATE:
      return {
        ...state,
        status: ((state.answer.indexOf('_') < 0) || (state.tries === 0)) ? status.WON : status.PLAYING,
      };
    default:
      return state;
  }
};
