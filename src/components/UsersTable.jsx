import React from 'react';
import { useSelector } from 'react-redux';
import UserRow from './UserRow';
import uniqid from 'uniqid';

const UsersTable = () => {
    const users = useSelector((state) => state.users.users);

    return (
        <table className="table">
            <thead>
                <tr>
                    <td>№</td>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Last Name</td>
                    <td>Phone</td>
                    <td>e-mail</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {users.map((person, index) => (
                    <UserRow person={person} index={index} key={uniqid()} />
                ))}
            </tbody>
        </table>
    );
};

export default UsersTable;
