import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage';
import { reducer as todoReducer } from './todos/';
import { reducer as filterReducer } from './filter';
import { reducer as tagReducer } from './tags';
import { TagTypes } from './constants';

const win = window;

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
  tagTypes: () => TagTypes,
  subjectColor: tagReducer
});

const middlewares = [];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__()
);

// 持久化Store
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
  let store = createStore(persistedReducer, {}, storeEnhancers);
  let persistor = persistStore(store);
  return { store, persistor };
};
