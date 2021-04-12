import { Divider, Grid } from "@material-ui/core";
import React from "react";
export default function PaymentMethod() {
  return (
    <Grid>
      <h4>Payment Method</h4>
      <Divider />
      <Grid container direction="row" spacing={2} style={{ marginTop: "10px" }}>
        Payment Method
      </Grid>
    </Grid>
  );
}
