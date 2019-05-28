import { combineReducers } from 'redux';





//reducers take in action (info about what happened)
// and copy of current state

const countA = (state = 1 , action) => {
  // console.log("insideA: " + state)
  switch (action.type) {
    case 'ADD_A':
      return state + action.payload
    default:
      return state;
  }
}

const countB = (state = 1, action) => {
  switch (action.type) {
    case 'ADD_B':
      return state + action.payload;
    default:
      return state;
  }
}



export default combineReducers({
  countA,
  countB
});