import { SET_QUERY } from './types';

const defaultState = { query: '' };

export const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_QUERY: {
      return {
        ...state,
        query: action.query,
      };
    }
    default:
      return state;
  }
};
