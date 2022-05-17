import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editableUserAction, editReducerOnAction, removeUserAction } from './store/actions';

const UserRow = ({ person, index }) => {
    const dispatch = useDispatch();
    const isEdit = useSelector((state) => state.isEdit.isEdit);

    const userRemove = (userIndex) => {
        dispatch(removeUserAction(userIndex));
    };

    const editableUser = (person, index) => {
        dispatch(editableUserAction(person, index));
        dispatch(editReducerOnAction(index));
    };

    return (
        <tr key={person.id}>
            <td>{index + 1}</td>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.age}</td>
            <td>{person.date}</td>
            <td>{person.car}</td>
            <td>
                <div>
                    <button disabled={isEdit} onClick={() => editableUser(person, index)}>
                        Edit
                    </button>
                    <button disabled={isEdit} onClick={() => userRemove(index)}>
                        Remove
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default UserRow;
