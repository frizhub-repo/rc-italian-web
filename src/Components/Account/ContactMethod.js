import { Divider, Grid } from "@material-ui/core";
import React from "react";
export default function ContactMethod() {
  return (
    <Grid>
      <h4>Contact Method</h4>
      <Divider />
      <Grid container direction="row" spacing={2} style={{ marginTop: "10px" }}>
        <h1>My Orders</h1>
      </Grid>
    </Grid>
  );
}
