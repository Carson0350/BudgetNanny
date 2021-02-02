import React, { useState } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';

import useStyles from './styles'

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: new Date()
};

const Form = () => {

  const classes = useStyles();
  const [formData, setFormData] = useState(initialState)

  return (
    <Grid container spaceing={2}>
      <Grid item xs={12}>
        <Typography align='center' varient='subtitle2' gutterBottom>...</Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select  >
            <MenuItem value='Income'>Income</MenuItem>
            <MenuItem value='Expense'>Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            <MenuItem value='Business'>Business</MenuItem>
            <MenuItem value='Salary'>Salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type='number' label='Amount' fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })}/>
      </Grid>
      <Grid item xs={6}>
        <TextField type='Date' label='Date' fullWidth value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })}/>
      </Grid>
      <Button className={classes.button} variant='outlined' color='primary' fullWidth>Create</Button>
    </Grid>
  )
}

export default Form