import { EDIT_INPUT_VALUE, CLEAR_INPUT_VALUES, EDITABLE_USER } from './types';

const defaultState = {
    name: '',
    lastName: '',
    phone: '',
    email: '',
};

export const inputReducer = (state = defaultState, action) => {
    switch (action.type) {
        case EDIT_INPUT_VALUE: {
            if (action.valueType === 'name') {
                return { ...state, name: action.value };
            }
            if (action.valueType === 'lastName') {
                return { ...state, lastName: action.value };
            }
            if (action.valueType === 'phone') {
                return { ...state, phone: action.value };
            }
            if (action.valueType === 'email') {
                return { ...state, email: action.value };
            } else {
                return state;
            }
        }
        case CLEAR_INPUT_VALUES: {
            return { ...state, name: '', lastName: '', phone: '', email: '' };
        }
        case EDITABLE_USER: {
            console.log(action);
            return {
                ...state,
                id: action.id,
                name: action.data.name,
                lastName: action.data.lastName,
                phone: action.data.phone,
                email: action.data.email,
            };
        }
        default:
            return state;
    }
};
