import { types } from '../actions/word';

const getWord = () => {
  return 'testword';
}

const initialState = getWord();

export default (state = initialState, action) => {
  switch (action.type) {
    case types.RESET:
      return state;
    default:
      return state;
  }
}
