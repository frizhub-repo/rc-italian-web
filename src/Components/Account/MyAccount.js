import {
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

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

  return (
    <Grid>
      <h4>My Account</h4>
      <Divider />
      <Grid container direction="row" spacing={2} className={classes.root}>
        <Grid item md={6}>
          <TextField
            size="small"
            fullWidth
            className={classes.bgColor}
            id="outlined-basic"
            placeholder="Name"
            variant="outlined"
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            size="small"
            fullWidth
            className={classes.bgColor}
            id="outlined-basic"
            placeholder="Username"
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Grid container direction="row" spacing={2} className={classes.root}>
        <Grid item md={6}>
          <TextField
            size="small"
            fullWidth
            className={classes.bgColor}
            id="outlined-basic"
            placeholder="Email"
            type="email"
            variant="outlined"
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            size="small"
            fullWidth
            className={classes.bgColor}
            id="outlined-basic"
            placeholder="Phone Number"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={2} className={classes.root}>
        <Grid item md={12}>
          <TextField
            size="small"
            fullWidth
            className={classes.bgColor}
            id="outlined-basic"
            placeholder="Password"
            type="password"
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
