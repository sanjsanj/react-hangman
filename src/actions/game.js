import wordApi from '../apis/word';

export const types = {
  NEW_GAME_REQUEST: 'NEW_GAME_REQUEST',
  NEW_GAME_SUCCESS: 'NEW_GAME_SUCCESS',
  NEW_GAME_ERROR: 'NEW_GAME_ERROR',
  TRY_LETTER: 'TRY_LETTER',
  CHECK_GAME_STATE: 'CHECK_GAME_STATE',
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
    return (dispatch) => {
      dispatch({
        type: types.TRY_LETTER,
        letter,
      });
      dispatch({
        type: types.CHECK_GAME_STATE,
      });
    };
  },
  checkGameState() {
    return {
      type: types.CHECK_GAME_STATE,
    };
  },
};
