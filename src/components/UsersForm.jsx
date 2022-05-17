import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUserAction, editReducerOffAction, editUserAction, inputChangeAction, inputClearAction } from '../components/store/actions';

const UsersForm = () => {
    const dispatch = useDispatch();
    const isEdit = useSelector((state) => state.isEdit.isEdit);
    const editableUserIndex = useSelector((state) => state.isEdit.userIndex);
    const userInputValue = useSelector((state) => state.input);

    const editInput = (e, type) => {
        dispatch(inputChangeAction(e.target.value, type));
    };

    const addUser = (e) => {
        e.preventDefault();
        if (!isEdit) {
            dispatch(addUserAction(userInputValue));
        } else {
            dispatch(editUserAction(userInputValue, editableUserIndex));
            dispatch(editReducerOffAction());
        }
        dispatch(inputClearAction());
    };

    return (
        <form>
            <div>
                <input placeholder="Name" value={userInputValue.name} onChange={(e) => editInput(e, 'name')} />
                <input placeholder="Age" value={userInputValue.age} onChange={(e) => editInput(e, 'age')} />
                <input placeholder="Date" value={userInputValue.date} onChange={(e) => editInput(e, 'date')} />
                <input placeholder="Car" value={userInputValue.car} onChange={(e) => editInput(e, 'car')} />
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
