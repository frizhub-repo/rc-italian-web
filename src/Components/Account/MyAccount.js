import {
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useUserContext } from "../../Context/userContext";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
  },
  changePassword: {
    marginTop: "15px",
    color: "#B39872",
  },
  bgColor: {
    backgroundColor: "white",
  },
}));

export default function MyAccount() {
  const classes = useStyles();
  const { customer } = useUserContext();

  return (
    <Grid>
      <h4>My Account</h4>{console.log({customer})}
      <Divider />
      <Grid container direction="row" spacing={2} className={classes.root}>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            size="small"
            fullWidth
            className={classes.bgColor}
            id="outlined-basic1"
            placeholder="Name"
            variant="outlined"
            value={`${customer?.firstName} ${customer?.lastName}`}
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            size="small"
            fullWidth
            className={classes.bgColor}
            id="outlined-basic2"
            placeholder="Username"
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Grid container direction="row" spacing={2} className={classes.root}>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            size="small"
            fullWidth
            className={classes.bgColor}
            id="outlined-basic3"
            placeholder="Email"
            type="email"
            variant="outlined"
            value={customer?.email}
            disabled
          />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField
            size="small"
            fullWidth
            className={classes.bgColor}
            id="outlined-basic4"
            placeholder="Phone Number"
            variant="outlined"
            type="text"
            value={customer?.phoneNumber}
          />
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={2} className={classes.root}>
        <Grid item md={12} xs={12}>
          <TextField
            size="small"
            fullWidth
            className={classes.bgColor}
            id="outlined-basic5"
            placeholder="Password"
            type="text"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-end"
        className={classes.changePassword}
      >
        <Grid item>
          <Typography>Change Password</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
