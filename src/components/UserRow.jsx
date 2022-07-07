import { Button, TableCell, TableRow } from '@mui/material';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../asyncActions/users';
import { InputContext } from '../Context/Context';
import { formatNumber } from '../helpers/formatNumber';

const UserRow = ({ person, index }) => {
  const [formattedPhoneNumber, SetFormattedPhoneNumber] = useState('');
  useEffect(() => {
    if (person.data.phone) {
      SetFormattedPhoneNumber(formatNumber(person.data.phone));
    } else {
      SetFormattedPhoneNumber(person.data.phone);
    }
  }, [person]);

  console.log(formattedPhoneNumber);
  const dispatch = useDispatch();
  const { setUser, isEdit, setIsEdit } = useContext(InputContext);

  const editableUser = (id, user, index) => {
    setUser({
      id: id,
      index: index,
      name: user.name,
      lastName: user.lastName,
      phone: user.phone,
      email: user.email,
    });
    setIsEdit(true);
  };

  return (
    <TableRow key={person._id}>
      <TableCell>{index + 1}</TableCell>
      {/* <TableCell>{person._id}</TableCell> */}
      {person.data.name ? <TableCell>{person.data.name}</TableCell> : <TableCell sx={{ color: 'lightslategray' }}>NO DATA</TableCell>}
      {person.data.lastName ? <TableCell>{person.data.lastName}</TableCell> : <TableCell sx={{ color: 'lightslategray' }}>NO DATA</TableCell>}
      {person.data.phone ? <TableCell>{formattedPhoneNumber}</TableCell> : <TableCell sx={{ color: 'lightslategray' }}>NO DATA</TableCell>}
      {person.data.email ? <TableCell>{person.data.email}</TableCell> : <TableCell sx={{ color: 'lightslategray' }}>NO DATA</TableCell>}
      <TableCell>
        <Button sx={{ margin: '0 10px', width: '90px' }} variant="contained" color="success" disabled={isEdit} onClick={() => editableUser(person._id, person.data, index)}>
          Edit
        </Button>
        <Button sx={{ margin: '0 10px', width: '90px' }} variant="contained" color="error" disabled={isEdit} onClick={() => dispatch(removeUser(person._id, index))}>
          Remove
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default UserRow;
