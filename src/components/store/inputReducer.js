import { EDIT_INPUT_VALUE, CLEAR_INPUT_VALUES, EDITABLE_USER } from './types';

const defaultState = {
    id: '',
    name: '',
    age: '',
    date: '',
    car: '',
};

export const inputReducer = (state = defaultState, action) => {
    console.log(action);
    switch (action.type) {
        case EDIT_INPUT_VALUE: {
            if (action.valueType === 'name') {
                return { ...state, name: action.value, id: Date.now() };
            }
            if (action.valueType === 'age') {
                return { ...state, age: action.value, id: Date.now() };
            }
            if (action.valueType === 'date') {
                return { ...state, date: action.value, id: Date.now() };
            }
            if (action.valueType === 'car') {
                return { ...state, car: action.value, id: Date.now() };
            } else {
                return state;
            }
        }
        case CLEAR_INPUT_VALUES: {
            return { ...state, id: '', name: '', age: '', date: '', car: '' };
        }
        case EDITABLE_USER: {
            return {
                ...state,
                id: action.user.id,
                name: action.user.name,
                age: action.user.age,
                date: action.user.date,
                car: action.user.car,
            };
        }
        default:
            return state;
    }
};
