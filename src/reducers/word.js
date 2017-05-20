import { types } from '../actions/word';

const initialState = 'Loading...';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST:
      return state;
    case types.SUCCESS:
      return action.payload.word;
    case types.ERROR:
      return state;
    default:
      return state;
  }
};
