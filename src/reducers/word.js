import { types } from '../actions/word';

const initialState = 'Loading...';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST:
      return initialState;
    case types.SUCCESS:
      return action.payload.word;
    default:
      return state;
  }
};
