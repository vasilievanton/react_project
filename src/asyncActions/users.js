import { addManyUserAction } from '../components/store/actions';

export const fetchUsers2 = () => {
    return function (dispatch) {
        fetch('http://178.128.196.163:3000/api/records')
            .then((response) => response.json())
            .then((json) => dispatch(addManyUserAction(json)));
    };
};

export const fetchUsers = () => {
    return async function (dispatch) {
        const response = await fetch('http://178.128.196.163:3000/api/records');
        const json = await response.json();
        await dispatch(addManyUserAction(json));
    };
};

export const putUsers = (user) => {
    return async function (dispatch) {
        await fetch('http://178.128.196.163:3000/api/records', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: user }),
        });
        const response = await fetch('http://178.128.196.163:3000/api/records');
        const json = await response.json();
        await dispatch(addManyUserAction(json));
    };
};

export const removeUsers = (id) => {
    return async function (dispatch) {
        await fetch('http://178.128.196.163:3000/api/records/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const response = await fetch('http://178.128.196.163:3000/api/records');
        const json = await response.json();
        await dispatch(addManyUserAction(json));
    };
};

// POST
export const postUser = (id, user) => {
    return async function (dispatch) {
        await console.log(id, user);
        await fetch('http://178.128.196.163:3000/api/records/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: user }),
        });
        const response = await fetch('http://178.128.196.163:3000/api/records');
        const json = await response.json();
        await dispatch(addManyUserAction(json));
    };
};
