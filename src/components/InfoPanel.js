import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  margin:'0 atuo',
  textAlign: 'center',
 
  
  color: theme.palette.text.secondary,
}));

export default function InfoPanel() {
    const classes = Item()
  return (
    <Box sx={{ flexGrow: 3 }}>
      <Grid container spacing={3} >
        <Grid item xs={12} md={4}>
          <Item >Grid 1</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>Grid 2</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>Grid 3</Item>
        </Grid>
        
      </Grid>
    </Box>
  );
}
