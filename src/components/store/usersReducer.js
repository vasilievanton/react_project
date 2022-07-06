import { LOAD_USERS, ADD_USER, REMOVE_USER, EDIT_USER, FILTER_USER } from './types';

const defaultState = { users: [] };

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_USERS: {
      console.log(action.users);
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
    case FILTER_USER: {
      return {
        ...state,
        users: state.users.filter((user) => user.data.name.toLowerCase().includes(action.query.toLowerCase()))
      };
    }
    default:
      return state;
  }
};
