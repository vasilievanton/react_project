import { ADD_USER, REMOVE_USER, EDIT_USER, ADD_MANY_USER } from './types';

const defaultState = { users: [] };

export const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_USER: {
            console.log(action);
            return {
                ...state,
                users: [...action.users.map((user) => user)],
                // users: [...state.users, ...action.users.map((user) => user.data)],
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
                              ...user,
                              name: action.user.name,
                              age: action.user.age,
                              date: action.user.date,
                              car: action.user.car,
                          }
                        : user
                ),
            };
        }
        default:
            return state;
    }
};
