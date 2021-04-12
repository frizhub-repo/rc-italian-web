import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { makeStyles } from "@material-ui/core/styles";
import { Box, TextField, Button, FormHelperText } from "@material-ui/core";
import { customerSignIn } from "../../api/customer";
import Facebook from "../../images/facebook.svg";
import Google from "../../images/google.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "0px !important",
  },
  "MuiPaper-rounded": {
    borderRadius: "0px !important",
  },
  signInWithSocial: {
    fontSize: "15px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  signInWithEmail: {
    fontSize: "15px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  socialIcon: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F2F2F2",
    fontSize: "14px",
    fontWeight: "bolder",
    cursor: "pointer",
  },
  socialIconSpacing: {
    margin: "0px 10px",
  },
  existingUser: {
    fontSize: "12px",
  },
  txtFieldSpacing: {
    marginTop: "10px",
  },
  rememberMe: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  forgotPassword: {
    fontWeight: "borlder",
    fontSize: "14px",
  },
  checkBox: {
    height: "20px",
    width: "20px",
    marginRight: "5px",
  },
  checkboxLabel: {
    fontSize: "13px",
    display: "flex",
    cursor: "pointer",
  },
  signInButton: {
    borderRadius: "30px",
    width: "100%",
    padding: "10px 20px",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  join: {
    textAlign: "center",
    marginTop: "10px",
  },
  recipeSpacing: {
    fontSize: "13px",
    cursor: "pointer",
  },
  termServices: {
    backgroundColor: "#F5F5F5",
    padding: "10px 20px",
    fontSize: "12px",
    textAlign: "center",
  },
  helperText: {
    color: "red",
    marginTop: "0px",
  },
  facebookSpacing: {
    marginRight: "6px"
  },
  googleSpacing: {
    marginLeft: "6px"
  },
}));

export default function SignIn({ handleClose, check2 }) {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const signIn = async (data) => {
    try {
      const res = await customerSignIn(data);
      window.localStorage.setItem("token", res?.data?.data?.token);
      handleClose();
      toast.success(res?.data?.message);
    } catch (error) {
      console.log({ errors });
      console.log(error);
    }
  };

  return (
    <Box>
      <Box className={classes.signInWithSocial}>Sign in with social.</Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "40px",
        }}
      >
        <Box className={`${classes.socialIcon} ${classes.facebookSpacing}`} >
          <img
            src={Facebook}
            width="28px"
            height="28px"
            alt="facebook"
            className={classes.socialIconSpacing}
          />{" "}
          Facebook
        </Box>
        <Box className={`${classes.socialIcon} ${classes.googleSpacing}`} >
          <img
            src={Google}
            width="23px"
            height="23px"
            alt="google"
            className={classes.socialIconSpacing}
          />{" "}
          Google
        </Box>
      </Box>
      <Box className={classes.signInWithEmail}>Sign in with email.</Box>
      <Box className={classes.existingUser}>Existing users.</Box>
      <form onSubmit={handleSubmit(signIn)}>
        <Box>
          <TextField
            className={classes.txtFieldSpacing}
            id="email"
            fullWidth
            placeholder="Email"
            variant="outlined"
            size="small"
            name="email"
            inputRef={register({
              required: "Email Address required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            error={errors?.email ? true : false}
          />
          <FormHelperText className={classes.helperText}>
            {errors?.email?.message}
          </FormHelperText>
          <TextField
            className={classes.txtFieldSpacing}
            id="password"
            fullWidth
            placeholder="Password"
            variant="outlined"
            size="small"
            name="password"
            type="password"
            inputRef={register({
              required: "Password required",
              minLength: {
                value: 8,
                message: "Password must be 8 character",
              },
            })}
            error={errors.password ? true : false}
          />
          <FormHelperText className={classes.helperText}>
            {errors?.password?.message}
          </FormHelperText>
        </Box>
        <Box className={classes.rememberMe}>
          <Box>
            <label className={classes.checkboxLabel}>
              <input
                type="radio"
                id="email"
                name="filedAs"
                value="email"
                className={classes.checkBox}
              />
              Remember me
            </label>
          </Box>
          <Box className={classes.forgotPassword}>Forgot Password?</Box>
        </Box>
        <Box>
          <Button
            disableElevation
            className={classes.signInButton}
            type="submit"
          >
            Sign in
          </Button>
        </Box>
      </form>
      <Box className={classes.join}>
        <label className={classes.recipeSpacing} onClick={check2}>
          New to all recipes? <b>Join for free!</b>
        </label>
      </Box>
      <Box className={classes.termServices}>
        <label>
          By signing in, you are agreeing to our <b>Terms of Services</b> and
          our <b>Privacy Policy</b> - Your California Rights
        </label>
      </Box>
    </Box>
  );
}
