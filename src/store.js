import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import word from './reducers/word';

const reducers = combineReducers({
  word,
});

export default createStore(reducers, applyMiddleware(thunk));
