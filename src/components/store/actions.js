import { EDIT_INPUT_VALUE, CLEAR_INPUT_VALUES, EDITABLE_USER, EDIT_USER_OFF, EDIT_USER_ON, LOAD_USERS, ADD_USER, REMOVE_USER, EDIT_USER } from './types';

export const addManyUserAction = (users) => ({
  type: LOAD_USERS,
  users,
});
export const addUserAction = (user) => ({
  type: ADD_USER,
  user,
});
export const removeUserAction = (userIndex) => ({
  type: REMOVE_USER,
  userIndex,
});
export const editUserAction = (id, user, userIndex) => ({
  type: EDIT_USER,
  id,
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
export const editableUserAction = (id, user, userIndex) => ({
  type: EDITABLE_USER,
  id: id,
  data: user,
  userIndex: userIndex,
});

export const editReducerOnAction = () => ({
  type: EDIT_USER_ON,
});
export const editReducerOffAction = () => ({
  type: EDIT_USER_OFF,
});
