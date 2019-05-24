import {
  createStore,
  applyMiddleware
} from 'redux'
import rootReducers from './reducers'
import thunk from 'redux-thunk';

const initialState = {
  countA: 1,
  countB: 1
}

const store = createStore(
  rootReducers,
  initialState,
  applyMiddleware(thunk)
)

export default store