/** @format */
import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import PlaceDetails from "../PlaceDetails/PlaceDetails";

import useStyles from "./styles";

function List() {
  const classes = useStyles();
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const restau = [
    { name: "Acacia" },
    { name: "CJ" },
    { name: "KFC" },
    { name: "Mambo" },
    { name: "Magie's" },
    { name: "Acacia" },
    { name: "CJ" },
    { name: "KFC" },
    { name: "Mambo" },
    { name: "Magie's" },
  ];

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurant, Hotels & Attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(event) => setType(event.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select
          value={rating}
          onChange={(event) => setRating(event.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} className={classes.list}>
        {restau?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails restau={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default List;
