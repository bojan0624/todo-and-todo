import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { reducer as todoReducer } from './todos/'

const win = window

const reducer = combineReducers({
  todos: todoReducer
})

const middlewares = []
// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(require('redux-immutable-state-invariant')())
// }

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__()
)

export default createStore(reducer, {}, storeEnhancers)