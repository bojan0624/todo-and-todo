import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as todoReducer } from './todos/';
import { reducer as filterReducer } from './filter';
import { reducer as tagReducer } from './tags';
import { TagTypes } from './constants';

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

const storeEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

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
