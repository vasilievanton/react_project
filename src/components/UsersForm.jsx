import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editReducerOffAction, inputChangeAction, inputClearAction } from '../components/store/actions';
import { fetchUsers, postUser, putUser } from '../asyncActions/users';

const UsersForm = () => {
  const dispatch = useDispatch();
  const isEdit = useSelector((state) => state.isEdit.isEdit);
  const userInputValue = useSelector((state) => state.input);
  const editedUserData = {
    name: userInputValue.name,
    lastName: userInputValue.lastName,
    phone: userInputValue.phone,
    email: userInputValue.email,
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const editInput = (e, type) => {
    dispatch(inputChangeAction(e.target.value, type));
  };

  const addUser = (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(postUser(userInputValue.id, editedUserData, userInputValue.index));
      dispatch(editReducerOffAction());
    } else {
      dispatch(putUser(userInputValue));
    }
    dispatch(inputClearAction());
  };

  return (
    <form>
      <div>
        <input placeholder="Name" value={userInputValue.name} onChange={(e) => editInput(e, 'name')} />
        <input placeholder="last Name" value={userInputValue.lastName} onChange={(e) => editInput(e, 'lastName')} />
        <input placeholder="phone" value={userInputValue.phone} onChange={(e) => editInput(e, 'phone')} />
        <input placeholder="email" value={userInputValue.email} onChange={(e) => editInput(e, 'email')} />
      </div>
      <div className="form__btns">
        <button type="button" onClick={() => dispatch(inputClearAction())}>
          Clear
        </button>
        <button type="submit" onClick={(e) => addUser(e)}>
          {isEdit ? 'Edit' : 'Add'}
        </button>
      </div>
    </form>
  );
};

export default UsersForm;
