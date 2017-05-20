import { createStore, combineReducers } from 'redux';
import word from './reducers/word';

const reducers = combineReducers({
  word,
});

export default createStore(reducers);
