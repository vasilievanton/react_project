import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUsers } from '../asyncActions/users';
import { editableUserAction, editReducerOnAction } from './store/actions';

// сюда надо передавать не только персона но и всею дату. дальше вытаскивать персона и отдельно id

const UserRow = ({ person, index }) => {
    const dispatch = useDispatch();
    const isEdit = useSelector((state) => state.isEdit.isEdit);

    const editableUser = (person, index) => {
        dispatch(editableUserAction(person, index));
        dispatch(editReducerOnAction(index));
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
                    <button disabled={isEdit} onClick={() => editableUser(person._id, person.data)}>
                        Edit
                    </button>
                    <button disabled={isEdit} onClick={() => dispatch(removeUsers(person._id))}>
                        Remove
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default UserRow;
