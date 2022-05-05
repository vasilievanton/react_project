const defaultState = {
    isEdit: false,
    userIndex: null,
};

const IS_EDIT_USER = 'IS_EDIT_USER';
const NO_EDIT_USER = 'NO_EDIT_USER';

// action = {type: '', payload: '?'}
export const isEditReducer = (state = defaultState, action) => {
    switch (action.type) {
        case IS_EDIT_USER: {
            return {
                isEdit: true,
                userIndex: action.payload.index,
            };
        }
        case NO_EDIT_USER: {
            return defaultState;
        }
        default:
            return state;
    }
};

export const isEditReducerAction = (type, payload) => ({ type, payload });
