import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { usersReducer } from './usersReducer';
import thunk from 'redux-thunk';
import { loadingReducer } from './loadingReducer';
import { filterReducer } from './filterReducer';

const rootReduser = combineReducers({
  users: usersReducer,
  isLoading: loadingReducer,
  filter: filterReducer
});

export const store = createStore(rootReduser, applyMiddleware(thunk));
