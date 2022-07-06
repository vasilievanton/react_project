import { LOAD_USERS, ADD_USER, REMOVE_USER, EDIT_USER, LOADING_ON, LOADING_OFF } from './types';

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

export const setIsLoadingOn = () => ({
  type: LOADING_ON,
});
export const setIsLoadingOff = () => ({
  type: LOADING_OFF,
});
