import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { usersReducer } from './usersReducer';
import thunk from 'redux-thunk';
import { loadingReducer } from './loadingReducer';

const rootReduser = combineReducers({
  users: usersReducer,
  isLoading: loadingReducer,
});

export const store = createStore(rootReduser, applyMiddleware(thunk));
