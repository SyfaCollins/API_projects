/** @format */
import React from "react";
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core'

import useStyles from './styles'

function List() {
  const classes = useStyles()
    return (
      <div className={classes.container}>
        <Typography variant='h4'>
          Restaurant, Hotels & Attractions around you
        </Typography>

      </div>
    );
  }
  
  export default List;
  