import { addManyUserAction, addUserAction, editUserAction, removeUserAction, setIsLoadingOff, setIsLoadingOn } from '../components/store/actions';

export const fetchUsers = () => {
  return async function (dispatch) {
    await dispatch(setIsLoadingOn());
    const response = await fetch('http://178.128.196.163:3000/api/records');
    const json = await response.json();
    await dispatch(addManyUserAction(json));
    await dispatch(setIsLoadingOff());
  };
};

export const putUser = (user) => {
  return async function (dispatch) {
    const response = await fetch('http://178.128.196.163:3000/api/records', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: user }),
    });
    const json = await response.json();
    await dispatch(addUserAction(json));
  };
};

export const removeUser = (id, userIndex) => {
  return async function (dispatch) {
    await fetch(`http://178.128.196.163:3000/api/records/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await dispatch(removeUserAction(userIndex));
  };
};

export const postUser = (id, user, userIndex) => {
  return async function (dispatch) {
    await fetch(`http://178.128.196.163:3000/api/records/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: user }),
    });
    await dispatch(editUserAction(id, user, userIndex));
  };
};
