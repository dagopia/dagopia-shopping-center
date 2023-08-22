import React from 'react';
import { format } from 'date-fns';
import { Box, Typography } from '@mui/material';
import { Margin } from '@mui/icons-material';

const DateComponent = ({ date }) => {
  const formattedDate = format(date, 'MMMM dd, yyyy');

  return <Box sx={{display:'flex'}}>
    
    <Typography sx={{color:'#13827E',mx:'20px'}}>{formattedDate}:<span>Date formatting in react practice
</span></Typography>
    </Box>;
};

export default DateComponent;
