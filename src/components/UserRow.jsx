import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../asyncActions/users';
import { editableUserAction, editReducerOnAction } from './store/actions';

const UserRow = ({ person, index }) => {
  const dispatch = useDispatch();
  const isEdit = useSelector((state) => state.isEdit.isEdit);

  const editableUser = (id, user, index) => {
    console.log(id, user, index);
    dispatch(editableUserAction(id, user, index));
    dispatch(editReducerOnAction());
  };

  return (
    <tr key={person._id}>
      <td>{index + 1}</td>
      <td>{person._id}</td>
      <td>{person.data.name}</td>
      <td>{person.data.lastName}</td>
      <td>{person.data.phone}</td>
      <td>{person.data.email}</td>
      <td>
        <div>
          <button disabled={isEdit} onClick={() => editableUser(person._id, person.data, index)}>
            Edit
          </button>
          <button disabled={isEdit} onClick={() => dispatch(removeUser(person._id, index))}>
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
