import React, { useState } from 'react';
import classes from './Table.module.css';

const initialValue = {
    id: '',
    name: '',
    age: '',
    date: '',
    car: '',
};

const Table = (props) => {
    const [data, setData] = useState(props.value);

    const [userData, setUserData] = useState(initialValue);
    const [users, setUsers] = useState(data);
    console.log(userData);
    const [editTableUserData, setEditTableUserData] = useState({
        isEdit: false,
        indexUser: null,
    });

    const handleRemoveClick = (id, index) => {
        console.log(id);
        setData(data.filter((user, userIndex) => userIndex !== index));
        setUsers(users.filter((user, userIndex) => userIndex !== index));
    };
    console.log(data);
    console.log(users);

    const isLillFields = userData.name || userData.age || userData.date || userData.name;

    const handleSubmitUser = (e) => {
        e.preventDefault();
        if (isLillFields) {
            if (editTableUserData.isEdit) {
                const editedData = users;
                editedData.splice(editTableUserData.userIndex, 1, userData);
                setUsers(editedData);
                setData(editedData);
                setEditTableUserData({
                    isEdit: false,
                    indexUser: null,
                });
            } else {
                setUsers((prevState) => [...prevState, userData]);
                setData((prevState) => [...prevState, userData]);
            }
            setUserData(initialValue);
        }
    };

    const handleClickClean = () => setUserData(initialValue);
    const handleClickEdit = (data, index) => {
        setUserData(data);
        setEditTableUserData({ isEdit: true, userIndex: index });
    };

    return (
        <div>
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
                    {data.map((person, index) => (
                        <tr key={person.id}>
                            <td>{index + 1}</td>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>{person.date}</td>
                            <td>{person.car}</td>
                            <td>
                                <div>
                                    <button onClick={() => handleClickEdit(person, index)}>Edit</button>
                                    <button onClick={() => handleRemoveClick(person.id, index)}>Remove</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <form onSubmit={handleSubmitUser} onReset={handleClickClean}>
                <div>
                    <input placeholder="Name" onChange={(e) => setUserData((prevState) => ({ ...prevState, name: e.target.value, id: Date.now() }))} value={userData.name} />
                    <input placeholder="Age" onChange={(e) => setUserData((prevState) => ({ ...prevState, age: e.target.value, id: Date.now() }))} value={userData.age} />
                    <input placeholder="Date" onChange={(e) => setUserData((prevState) => ({ ...prevState, date: e.target.value, id: Date.now() }))} value={userData.date} />
                    <input placeholder="Car" onChange={(e) => setUserData((prevState) => ({ ...prevState, car: e.target.value, id: Date.now() }))} value={userData.car} />
                </div>
                <div className="form__btns">
                    <button type="reset">Clear</button>
                    <button disabled={!isLillFields} type="submit">
                        {editTableUserData.isEdit ? 'Edit' : 'Add'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Table;
