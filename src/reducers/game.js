import { types } from '../actions/game';
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

const getImageSrc = triesLeft => 6 - triesLeft;

const formatWord = word => word.toLowerCase().replace(/-/, '');

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
        status: status.PLAYING,
        word: formatWord(action.word),
        answer: action.word.split('').map(() => '_'),
        letters: initialState.letters,
        tries: initialState.tries,
        imageSrc: initialState.imageSrc,
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
          };
        }
        // failure
        return {
          ...state,
          letters: state.letters.filter(letter => letter !== action.letter),
          tries: state.tries - 1,
        };
      }
      return state;
    case types.CHECK_GAME_STATE:
      return {
        ...state,
        imageSrc: `http://www.writteninpencil.de/Projekte/Hangman/hangman${getImageSrc(state.tries)}.png`,
        status: ((state.answer.indexOf('_') < 0) || (state.tries === 0)) ? status.WON : status.PLAYING,
      };
    default:
      return state;
  }
};
