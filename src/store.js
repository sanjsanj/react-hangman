import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import game from './reducers/game';

const reducers = combineReducers({
  game,
});

export default createStore(reducers, applyMiddleware(thunk));
