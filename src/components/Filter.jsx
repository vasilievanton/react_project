import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from './store/actions';

const Filter = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const query = form.search.value;
      dispatch(setQuery(query))
    };
  
    return (
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField 
          id="filled-basic" 
          label="Search..." 
          variant="standard" 
          fullWidth
          type="search" 
          value={search} 
          name="search" 
          onChange={(e) => setSearch(e.target.value)} 
          sx={{ mb: '1.5rem' }}
        />
        <Button sx={{ ml: '1.5rem' }} variant='outlined' onClick={()=>{setSearch('')}}>Clear</Button>
        <Button sx={{ ml: '1.5rem' }} variant='contained' type="submit">Search</Button>
      </form>
    );
  };
  
export default Filter;