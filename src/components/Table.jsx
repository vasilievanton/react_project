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
    const [users, setUsers] = useState([data]);

    const handleSubmitUser = (e) => {
        e.preventDefault();
        setUsers((prevState) => [...prevState, userData]);
        setData((prevState) => [...prevState, userData]);
        setUserData(initialValue);
    };
    console.log(users);
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
                        {/* {keysHeader.map((key) => (
                        <td>{key}</td>
                    ))} */}
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
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <form onSubmit={handleSubmitUser}>
                <input placeholder="Name" onChange={(e) => setUserData((prevState) => ({ ...prevState, name: e.target.value, id: Date.now() }))} value={userData.name} />
                <input placeholder="Age" onChange={(e) => setUserData((prevState) => ({ ...prevState, age: e.target.value, id: Date.now() }))} value={userData.age} />
                <input placeholder="Date" onChange={(e) => setUserData((prevState) => ({ ...prevState, date: e.target.value, id: Date.now() }))} value={userData.date} />
                <input placeholder="Car" onChange={(e) => setUserData((prevState) => ({ ...prevState, car: e.target.value, id: Date.now() }))} value={userData.car} />
                <div>
                    <button type="reset">Clear</button>
                    <button type="submit">Add</button>
                </div>
                {/* <input onChange={(event) => setPerson(event.target.value)} type="text" value={person} /> */}
            </form>
        </div>
    );
};

export default Table;
