import {
  combineReducers
} from 'redux';

const countA = (state = 1, action) => {
  switch (action.type) {
    case 'ADD_A':
      return state + 1;
    default:
      return state;
  }
}

const countB = (state = 1, action) => {
  switch (action.type) {
    case 'ADD_B':
      return state + 1;
    default:
      return state;
  }
}


export default combineReducers({
  countA,
  countB
});