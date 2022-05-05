const data = [
    { id: 2123533425323, name: 'Vanya', age: '28', date: '13.04', car: 'yes' },
    { id: 8767564335646, name: 'Pasha', age: '32', date: '07.09', car: 'no' },
    { id: 5465786744645, name: 'Leha', age: '41', date: '27.08', car: 'no' },
    { id: 4734878785546, name: 'Vitya', age: '13', date: '11.01', car: 'yes' },
];
const defaultState = [...data];

const ADD_USER = 'ADD_USER';
const DELETE_USER = 'DELETE_USER';
const EDIT_USER = 'EDIT_USER';

// action = {type: '', payload: '?'}
export const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_USER: {
            return [...state, action.payload];
        }
        case DELETE_USER: {
            const newState = state.filter((user, userIndex) => userIndex !== action.payload);
            return newState;
        }
        case EDIT_USER: {
            const newState = [...state];
            newState.splice(action.payload[1], 1, action.payload[0]);
            return newState;
        }
        default:
            return state;
    }
};

export const usersReducerAction = (type, payload) => ({ type, payload });
