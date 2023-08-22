import { Box, Typography } from '@mui/material'
import React from 'react'
import LineChart from './LineChart'
import PieChart from './PieChart'

export default function Charts() {
  return (
   <>
    <Typography sx={{fontSize:'28px',p:5,color:'#13827E',fontWeight:'600'}}>
    Data visualization and date formatting in react practice
    </Typography>
   <Box  sx={{width:'98%',display:'flex',justifyContent:'center',alignItems:'center'}}>
   
       <LineChart />
 <PieChart />
    </Box>
   
   </>
  )
}
