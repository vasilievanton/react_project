import { legacy_createStore as createStore, combineReducers } from 'redux';

import { inputReducer } from './inputReducer';
import { usersReducer } from './usersReducer';
import { isEditReducer } from './isEditReducer';

const rootReduser = combineReducers({
    input: inputReducer,
    users: usersReducer,
    isEdit: isEditReducer,
});

export const store = createStore(rootReduser);
