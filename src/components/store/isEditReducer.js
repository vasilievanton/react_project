import { EDIT_USER_OFF, EDIT_USER_ON } from './types';

const defaultState = {
  isEdit: false,
  userIndex: null,
};

export const isEditReducer = (state = defaultState, action) => {
  switch (action.type) {
    case EDIT_USER_ON: {
      return { ...state, isEdit: true, userIndex: action.userIndex };
    }
    case EDIT_USER_OFF: {
      return { ...state, isEdit: false, userIndex: null };
    }
    default:
      return state;
  }
};
