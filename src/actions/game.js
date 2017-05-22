import wordApi from '../apis/word';

export const types = {
  NEW_GAME_REQUEST: 'NEW_GAME_REQUEST',
  NEW_GAME_SUCCESS: 'NEW_GAME_SUCCESS',
  NEW_GAME_ERROR: 'NEW_GAME_ERROR',
  TRY_LETTER: 'TRY_LETTER',
};

export const actions = {
  requestNewGame() {
    return {
      type: types.NEW_GAME_REQUEST,
    };
  },
  newGameSuccess(word) {
    return {
      type: types.NEW_GAME_SUCCESS,
      word,
    };
  },
  newGameError() {
    return {
      type: types.NEW_GAME_ERROR,
    };
  },
  newGame() {
    return (dispatch) => {
      dispatch(actions.requestNewGame());
      return wordApi.get().then(([response, json]) => {
        if (response.status === 200) {
          dispatch(actions.newGameSuccess(json.word));
        } else {
          dispatch(actions.newGameError());
        }
      });
    };
  },
  tryLetter(letter) {
    return {
      type: types.TRY_LETTER,
      letter,
    };
  },
};
