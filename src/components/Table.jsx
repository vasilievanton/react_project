import React from 'react';
import classes from './Table.module.css';

const Table = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Date</td>
                    <td>Car</td>
                </tr>
            </thead>
            <tbody>
                {props.value.map((person, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{person.name}</td>
                        <td>{person.age}</td>
                        <td>{person.date}</td>
                        <td>{person.car}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
