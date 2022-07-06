import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers, postUser, putUser } from '../asyncActions/users';
import { InputContext } from '../Context/Context';
import { initialInputValue } from '../App';
import { Box, Button, TextField } from '@mui/material';

const UsersForm = () => {
  const dispatch = useDispatch();
  const { isEdit, setIsEdit } = useContext(InputContext);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const { user, setUser } = useContext(InputContext);

  const editInput = (e, type) => {
    setUser({ ...user, [type]: e.target.value });
  };

  const addUser = (e) => {
    e.preventDefault();
    const userData = { name: user.name, lastName: user.lastName, phone: user.phone, email: user.email };
    if (isEdit) {
      dispatch(postUser(user.id, userData, user.index));
      setIsEdit(false);
    } else {
      dispatch(putUser(userData));
    }
    setUser(initialInputValue);
  };

  return (
    <Box sx={{ margin: '20px auto' }}>
      <Box sx={{ display: 'flex' }}>
        <TextField fullWidth size="small" label="Name" value={user.name} onChange={(e) => editInput(e, 'name')} />
        <TextField fullWidth size="small" label="Last Name" value={user.lastName} onChange={(e) => editInput(e, 'lastName')} />
        <TextField fullWidth size="small" label="Phone" value={user.phone} onChange={(e) => editInput(e, 'phone')} />
        <TextField fullWidth size="small" label="E-mail" value={user.email} onChange={(e) => editInput(e, 'email')} />
        <Button variant="outlined" onClick={() => setUser(initialInputValue)}>
          Clear
        </Button>
        <Button variant="contained" onClick={(e) => addUser(e)}>
          {isEdit ? 'Edit' : 'Add'}
        </Button>
      </Box>
      <Box sx={{ display: 'flex' }}></Box>
    </Box>
  );
};

export default UsersForm;
