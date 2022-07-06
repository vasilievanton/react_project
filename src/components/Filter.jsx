import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterUserAction } from './store/actions';

const Filter = () => {
    // { setSearchParams, latest, postQuery }
    // const [checked, setChecked] = useState();
    const [search, setSearch] = useState('');
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const query = form.search.value;
    //   const isLatest = form.latest.checked;
    //   const params = {};
    //   if (query.length) params.query = query;
    //   console.log(params);
    console.log(query);
      dispatch(filterUserAction(query))
    //   if (isLatest) params.latest = true;
    //   setSearchParams(params);
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
        {/* <Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} name="latest" /> New Only */}
        <Button sx={{ ml: '1.5rem' }} variant='outlined' onClick={()=>{setSearch('')}}>Clear</Button>
        <Button sx={{ ml: '1.5rem' }} variant='contained' type="submit">Search</Button>
      </form>
    );
  };
  
export default Filter;