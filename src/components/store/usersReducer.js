import { ADD_USER, REMOVE_USER, EDIT_USER } from './types';
import { usersListData } from '../usersListData';

const defaultState = { users: [...usersListData] };

export const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
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
            console.log(action);
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

// TODO: можно же сразу return написать без доппеременных
// action.payload - не говорит о том что там лежит какой-то индекс, лучше назвать по-другому, это касается всего кода, везде перепроверь названия переменных и подумай, насколько они понятны человеку, кот первывй раз код видит

// https://stackoverflow.com/questions/35628774/how-to-update-single-value-inside-specific-array-item-in-redux
