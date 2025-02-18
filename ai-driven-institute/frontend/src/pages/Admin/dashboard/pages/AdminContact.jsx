import React from 'react'
import CustomizedDataGrid from '../components/CustomizedDataGrid'
import { Box, Grid, Typography } from '@mui/material'
import Copyright from '../internals/components/Copyright'

const AdminContact = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      
     
     <Typography sx={{mb:"40px"}} variant="h5" gutterBottom component="div">
       Contacts Table <br />
     </Typography>
      <Grid container spacing={2} columns={12}>
        <CustomizedDataGrid />
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  )
}

export default AdminContact