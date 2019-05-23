import { combineReducers } from 'redux';
import countReducer from './countReducer';

export default combineReducers({
  add: countReducer
});