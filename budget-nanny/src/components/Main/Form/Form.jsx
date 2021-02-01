import React from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';

import useStyles from './styles'

const Form = () => {

  const classes = useStyles();

  return (
    <Grid container spaceing={2}>
      <Grid item xs={12}>
        <Typography align='center' varient='subtitle2' gutterBottom>...</Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select>
            <MenuItem value='Income'>Income</MenuItem>
            <MenuItem value='Expense'>Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default Form