import { LOADING_ON, LOADING_OFF } from './types';

const defaultState = { isLoading: false };

export const loadingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOADING_ON: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOADING_OFF: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
