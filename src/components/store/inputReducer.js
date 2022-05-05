const defaultState = {
    id: '',
    name: '',
    age: '',
    date: '',
    car: '',
};
const ADD_INPUT_NAME = 'ADD_INPUT_NAME';
const ADD_INPUT_AGE = 'ADD_INPUT_AGE';
const ADD_INPUT_DATE = 'ADD_INPUT_DATE';
const ADD_INPUT_CAR = 'ADD_INPUT_CAR';
const EDIT_INPUT_NULL = 'EDIT_INPUT_NULL';
const EDIT_INPUT_EDIT = 'EDIT_INPUT_EDIT';
const EDIT_INPUT_NAME = 'EDIT_INPUT_NAME';
const EDIT_INPUT_AGE = 'EDIT_INPUT_AGE';
const EDIT_INPUT_DATE = 'EDIT_INPUT_DATE';
const EDIT_INPUT_CAR = 'EDIT_INPUT_CAR';

// action = {type: '', payload: '?'}
export const inputReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_INPUT_NAME: {
            return { ...state, name: action.payload, id: Date.now() };
        }
        case ADD_INPUT_AGE: {
            return { ...state, age: action.payload, id: Date.now() };
        }
        case ADD_INPUT_DATE: {
            return { ...state, date: action.payload, id: Date.now() };
        }
        case ADD_INPUT_CAR: {
            return { ...state, car: action.payload, id: Date.now() };
        }
        case EDIT_INPUT_NULL: {
            return { id: '', name: '', age: '', date: '', car: '' };
        }
        case EDIT_INPUT_EDIT: {
            return {
                id: action.payload.person.id,
                name: action.payload.person.name,
                age: action.payload.person.age,
                date: action.payload.person.date,
                car: action.payload.person.car,
            };
        }
        case EDIT_INPUT_NAME: {
            return { ...state, name: action.payload };
        }
        case EDIT_INPUT_AGE: {
            return { ...state, ade: action.payload };
        }
        case EDIT_INPUT_DATE: {
            return { ...state, date: action.payload };
        }
        case EDIT_INPUT_CAR: {
            return { ...state, car: action.payload };
        }
        default:
            return state;
    }
};

export const handleInputChangeAction = (type, payload) => ({ type, payload });
