import React from 'react'

import { Grid } from '@material-ui/core'
import Details from './components/Details/Details';

function App() {
  return (
    <div>
      <Grid container spaceing={0} alignItems='center' justify='center' styles={{ height: '100vh'}}>

        <Grid item xs={12} sm={4}>
          <Details/>
        </Grid>

        <Grid item xs={12} sm={4}>
          Main
        </Grid>

        <Grid item xs={12} sm={4}>
          <Details/>
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
