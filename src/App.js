import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AppHeader from './components/AppHeader';
import { handleInputChangeAction } from './components/store/inputReducer';
import { isEditReducerAction } from './components/store/isEditReducer';
import { usersReducerAction } from './components/store/usersReducer';

const appHeader = 'Привет react';

function App() {
    const dispatch = useDispatch();
    const nowInInput = useSelector((state) => state.input);
    const nowInTable = useSelector((state) => state.users);
    const isEditTable = useSelector((state) => state.isEdit);

    const handleClickAdd = (e) => {
        e.preventDefault();
        if (isEditTable.isEdit) {
            dispatch(usersReducerAction('EDIT_USER', [nowInInput, isEditTable.userIndex]));
        } else {
            dispatch(usersReducerAction('ADD_USER', nowInInput));
        }

        handleClickClean();
    };

    const handleClickClean = (e) => {
        return dispatch(handleInputChangeAction('EDIT_INPUT_NULL'));
    };

    const handleClickRemove = ({ index }) => {
        dispatch(usersReducerAction('DELETE_USER', index));
    };
    const handleClickEdit = (person) => {
        dispatch(handleInputChangeAction('EDIT_INPUT_EDIT', person));
        dispatch(isEditReducerAction('IS_EDIT_USER', person));
    };

    const handleInputChange = (type, value) => {
        return dispatch(handleInputChangeAction(type, value));
    };

    console.log('state.input (nowInInput)', nowInInput);
    console.log('state.users (nowInTable)', nowInTable);
    console.log('state.isEdit. isEdit?', isEditTable.isEdit);
    console.log('state.isEdit userIndex', isEditTable.userIndex);
    return (
        <div className="App">
            <AppHeader value={appHeader} />
            <table className="table">
                <thead>
                    <tr>
                        <td>№</td>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Date</td>
                        <td>Car</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {nowInTable.map((person, index) => (
                        <tr key={person.id}>
                            <td>{index + 1}</td>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>{person.date}</td>
                            <td>{person.car}</td>
                            <td>
                                <div>
                                    <button onClick={() => handleClickEdit({ person, index })}>Edit</button>
                                    <button onClick={() => handleClickRemove({ index })}>Remove</button>{' '}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>
                <form>
                    <div>
                        <input
                            placeholder="Name"
                            value={nowInInput.name}
                            onChange={(e) => {
                                if (isEditTable.isEdit) {
                                    return handleInputChange('EDIT_INPUT_NAME', e.target.value);
                                }
                                return handleInputChange('ADD_INPUT_NAME', e.target.value);
                            }}
                        />
                        <input
                            placeholder="Age"
                            value={nowInInput.age}
                            onChange={(e) => {
                                if (isEditTable.isEdit) {
                                    return handleInputChange('EDIT_INPUT_AGE', e.target.value);
                                }
                                return handleInputChange('ADD_INPUT_AGE', e.target.value);
                            }}
                        />
                        <input
                            placeholder="Date"
                            value={nowInInput.date}
                            onChange={(e) => {
                                if (isEditTable.isEdit) {
                                    return handleInputChange('EDIT_INPUT_DATE', e.target.value);
                                }
                                return handleInputChange('ADD_INPUT_DATE', e.target.value);
                            }}
                        />
                        <input
                            placeholder="Car"
                            value={nowInInput.car}
                            onChange={(e) => {
                                if (isEditTable.isEdit) {
                                    return handleInputChange('EDIT_INPUT_CAR', e.target.value);
                                }
                                return handleInputChange('ADD_INPUT_CAR', e.target.value);
                            }}
                        />
                    </div>
                    <div className="form__btns">
                        <button type="button" onClick={handleClickClean}>
                            Clear
                        </button>
                        <button type="submit" onClick={handleClickAdd}>
                            {isEditTable.isEdit ? 'Edit' : 'Add'}
                        </button>
                        {/* <MyButton label="Clear" classNames="" type="reset" handleClick={() => {}} />
                        <MyButton label={editTableUserData.isEdit ? 'Edit' : 'Add'} classNames="" type="submit" handleClick={() => {}} data={null} /> */}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
