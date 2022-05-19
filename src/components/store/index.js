import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { inputReducer } from './inputReducer';
import { usersReducer } from './usersReducer';
import { isEditReducer } from './isEditReducer';
import thunk from 'redux-thunk';

const rootReduser = combineReducers({
    input: inputReducer,
    users: usersReducer,
    isEdit: isEditReducer,
});

export const store = createStore(rootReduser, applyMiddleware(thunk));
