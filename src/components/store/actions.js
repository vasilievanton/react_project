import { EDIT_INPUT_VALUE, ADD_USER, CLEAR_INPUT_VALUES, EDITABLE_USER, EDIT_USER, EDIT_USER_OFF, EDIT_USER_ON, REMOVE_USER } from './types';

export const addUserAction = (user) => ({
    type: ADD_USER,
    user,
});
export const removeUserAction = (userIndex) => ({
    type: REMOVE_USER,
    userIndex,
});
export const editUserAction = (user, userIndex) => ({
    type: EDIT_USER,
    user,
    userIndex,
});

export const inputChangeAction = (value, valueType) => ({
    type: EDIT_INPUT_VALUE,
    value,
    valueType,
});
export const inputClearAction = () => ({
    type: CLEAR_INPUT_VALUES,
});
export const editableUserAction = (user, userIndex) => ({
    type: EDITABLE_USER,
    user,
    userIndex,
});

export const editReducerOnAction = (userIndex) => ({
    type: EDIT_USER_ON,
    userIndex,
});
export const editReducerOffAction = () => ({
    type: EDIT_USER_OFF,
});
