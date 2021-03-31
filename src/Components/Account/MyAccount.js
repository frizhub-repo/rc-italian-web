import { Divider, Grid, TextField } from "@material-ui/core";
import React from "react";
export default function MyAccount() {
  return (
    <Grid>
      <h4>My Account</h4>
      <Divider />
      <Grid container direction="row" spacing={2} style={{ marginTop: "10px" }}>
        <Grid item md={6}>
          <TextField
            size="small"
            fullWidth
            id="outlined-basic"
            placeholder="hellow world"
            variant="outlined"
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            size="small"
            fullWidth
            id="outlined-basic"
            placeholder="hellow world"
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Grid container direction="row" spacing={2} style={{ marginTop: "10px" }}>
        <Grid item md={6}>
          <TextField
            size="small"
            fullWidth
            id="outlined-basic"
            placeholder="hellow world"
            variant="outlined"
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            size="small"
            fullWidth
            id="outlined-basic"
            placeholder="hellow world"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
