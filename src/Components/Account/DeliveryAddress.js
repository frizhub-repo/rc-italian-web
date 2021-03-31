import { Divider, Grid } from "@material-ui/core";
import React from "react";
export default function DeliveryAddress() {
  return (
    <Grid>
      <h4>Delivery Address</h4>
      <Divider />
      <Grid container direction="row" spacing={2} style={{ marginTop: "10px" }}>
        <h1>My Orders</h1>
      </Grid>
    </Grid>
  );
}
