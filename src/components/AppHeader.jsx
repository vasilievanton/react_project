import { Box, Typography } from '@mui/material';
import React from 'react';

const AppHeader = (props) => {
  return (
    <Box  sx={{display: 'flex'}}>
      <Typography variant='h4' sx={{ margin: '15px auto' }}>{props.value}</Typography>;
    </Box>
  );
};

export default AppHeader;
