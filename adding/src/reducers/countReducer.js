import { ADD } from '../actions/Types';

const initialState = {
  countA: 1,
  countB: 1
};

export default function(state= initialState, action){
  switch(action.type){
    case ADD: 
    return {...state, countA: state.countA + state.countB};
    default:
    return state;
  }
}
