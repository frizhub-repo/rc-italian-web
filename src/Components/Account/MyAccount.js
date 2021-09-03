import {
  Button,
  CircularProgress,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { updateCustomerInfo } from "api/customer";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
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
  errorTxt: {
    color: "red",
  },
  progressbarSpacing: {
    marginRight: "8px",
  },
}));

export default function MyAccount() {
  const classes = useStyles();
  const { customer, refetchCustomerHandler } = useUserContext();
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit, control, errors } = useForm({
    defaultValues: {
      firstName: customer?.firstName,
      lastName: customer?.lastName,
    },
  });

  const updateProfile = async (data) => {
    setLoading(true);
    try {
      const res = await updateCustomerInfo(data);
      refetchCustomerHandler();
      toast.success("Profile has been updated");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log({ error });
      console.log({ errors });
      toast.error("Error updating profile");
    }
  };

  return (
    <Grid>
      <h4>My Account</h4>
      <Divider />
      {Object.entries(customer).length === 0 ? (
        <Skeleton
          variant="rect"
          height={400}
          width={"100%"}
          className={classes.skeletongSpacing}
        />
      ) : (
        <form onSubmit={handleSubmit(updateProfile)}>
          <Grid container direction="row" spacing={2} className={classes.root}>
            <Grid item md={6} xs={12} sm={6}>
              <TextField
                inputRef={register({
                  required: "Firstname Required",
                })}
                size="small"
                fullWidth
                name="firstName"
                defaultValue={customer?.firstName}
                className={classes.bgColor}
                id="outlined-basic1"
                placeholder="First Name"
                variant="outlined"
                label="First Name"
              />
              {errors?.firstName && (
                <span className={classes.errorTxt}>This is required.</span>
              )}
            </Grid>
            <Grid item md={6} xs={12} sm={6}>
              <TextField
                inputRef={register({
                  required: "Lastname Required",
                })}
                name="lastName"
                size="small"
                fullWidth
                className={classes.bgColor}
                id="outlined-basic2"
                placeholder="Last Name"
                variant="outlined"
                label="Last Name"
                defaultValue={customer?.lastName}
              />

              {errors?.lastName && (
                <span className={classes.errorTxt}>This is required.</span>
              )}
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
            justify="flex-end"
            className={classes.changePassword}
          >
            <Grid item>
              <Button type="submit">
                {loading && (
                  <CircularProgress
                    color="inherit"
                    size={20}
                    className={classes.progressbarSpacing}
                  />
                )}
                Update Profile
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Grid>
  );
}
