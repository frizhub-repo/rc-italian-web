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
  updateProfileBtn: {
    padding: "10px 30px",
    color: "#fff",
    backgroundColor: "#000",
    borderRadius: "30px",
    cursor: "pointer",
  },
}));

export default function MyAccount() {
  const classes = useStyles();
  const { customer } = useUserContext();

  return (
    <Grid>
      <h4>My Account</h4>
      <Divider />
      <form>
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
              label="Username"
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
              label="Surename"
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
              type="email"
              variant="outlined"
              value={customer?.email}
              disabled
              label="Email"
            />
          </Grid>
          <Grid item md={6} xs={12} sm={6}>
            <TextField
              size="small"
              fullWidth
              className={classes.bgColor}
              id="outlined-basic4"
              variant="outlined"
              type="text"
              value={customer?.phoneNumber}
              label="Phone Number"
              disabled
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.changePassword}
        >
          <Typography>Change Password</Typography>
          <button
            onClick={(event) => {
              event.preventDefault();
              alert("we are working on it and will get back to you soon");
            }}
            className={classes.updateProfileBtn}
          >
            Update Profile
          </button>
        </Grid>
      </form>
    </Grid>
  );
}
