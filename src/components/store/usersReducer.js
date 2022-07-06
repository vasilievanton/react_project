import { LOAD_USERS, ADD_USER, REMOVE_USER, EDIT_USER } from './types';

const defaultState = { users: [] };

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_USERS: {
      return {
        ...state,
        users: [...action.users.map((user) => user)],
      };
    }
    case ADD_USER: {
      return {
        ...state,
        users: [...state.users, action.user],
      };
    }
    case REMOVE_USER: {
      return {
        ...state,
        users: state.users.filter((user, userIndex) => userIndex !== action.userIndex),
      };
    }
    case EDIT_USER: {
      return {
        ...state,
        users: state.users.map((user, i) =>
          i === action.userIndex
            ? {
                _id: action.id,
                data: {
                  ...user,
                  name: action.user.name,
                  lastName: action.user.lastName,
                  phone: action.user.phone,
                  email: action.user.email,
                },
              }
            : user
        ),
      };
    }
    default:
      return state;
  }
};
