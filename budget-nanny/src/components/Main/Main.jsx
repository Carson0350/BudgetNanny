import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List'

const Main = ({ title }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title='Expense Tracker'/>
      <CardContent>
        <Typography align='center' variant='h5'>total balance $50000000</Typography>
        <Typography variant='subtitle1' styles={{ lineHeight: '1.5em', marginTop: '20px'}}>total balance $50000000</Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.CardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
};

export default Main