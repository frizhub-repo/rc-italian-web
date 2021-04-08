import { useForm } from "react-hook-form";
import { customerSignUp } from "../../api/customer";
import { toast } from "react-toastify";
import {
  Box,
  TextField,
  Button,
  FormHelperText,
  makeStyles,
} from "@material-ui/core";
import Facebook from "../../images/facebook.svg";
import Google from "../../images/google.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "0px !important",
  },
  "MuiPaper-rounded": {
    borderRadius: "0px !important",
  },
  signUpWithSocial: {
    fontSize: "15px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  signUpWithEmail: {
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
  txtFieldSpacing: {
    marginTop: "10px",
  },
  signUpButton: {
    borderRadius: "30px",
    width: "100%",
    padding: "10px 20px",
    backgroundColor: "black",
    marginTop: "15px",
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
  alreadyAccountSpacing: {
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

export default function SignUp({ check1, handleClose }) {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const signUp = async (data) => {
    try {
      const res = await customerSignUp(data);
      window.localStorage.setItem("token", res?.data?.data?.token);
      handleClose();
      toast.success("Registeration Successfull!");
      console.log({ data });
    } catch (error) {
      console.log({ errors });
      console.log(error);
    }
  };

  return (
    <Box>
      <Box className={classes.signUpWithSocial}>Sign up with social.</Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "40px",
        }}
      >
        <Box className={`${classes.socialIcon} ${classes.facebookSpacing}`}>
          <img
            src={Facebook}
            width="28px"
            height="28px"
            alt="facebook"
            className={classes.socialIconSpacing}
          />{" "}
          Facebook
        </Box>
        <Box className={`${classes.socialIcon} ${classes.googleSpacing}`}>
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
      <Box className={classes.signUpWithEmail}>Sign up with email.</Box>
      <form onSubmit={handleSubmit(signUp)}>
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
              required: "Email required",
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
            fullWidth
            placeholder="Phone Number"
            variant="outlined"
            size="small"
            name="phoneNumber"
            inputRef={register({
              required: "Phone Number required",
            })}
            error={errors?.phoneNumber ? true : false}
          />
          <FormHelperText className={classes.helperText}>
            {errors?.phoneNumber?.message}
          </FormHelperText>

          <TextField
            className={classes.txtFieldSpacing}
            fullWidth
            placeholder="First Name"
            variant="outlined"
            size="small"
            name="firstName"
            type="text"
            inputRef={register({
              required: "First Name required",
            })}
            error={errors?.firstName ? true : false}
          />
          <FormHelperText className={classes.helperText}>
            {errors?.firstName?.message}
          </FormHelperText>

          <TextField
            className={classes.txtFieldSpacing}
            fullWidth
            placeholder="Last Name"
            variant="outlined"
            size="small"
            name="lastName"
            type="text"
            inputRef={register({
              required: "Last Name required",
            })}
            error={errors?.lastName ? true : false}
          />
          <FormHelperText className={classes.helperText}>
            {errors?.lastName?.message}
          </FormHelperText>

          <TextField
            className={classes.txtFieldSpacing}
            id="address"
            fullWidth
            placeholder="Address"
            variant="outlined"
            size="small"
            name="address"
            inputRef={register({
              required: "Address required",
            })}
            error={errors?.address ? true : false}
          />
          <FormHelperText className={classes.helperText}>
            {errors?.address?.message}
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
            error={errors?.password ? true : false}
          />
          <FormHelperText className={classes.helperText}>
            {errors?.password?.message}
          </FormHelperText>
        </Box>
        <Box>
          <Button
            disableElevation
            className={classes.signUpButton}
            type="submit"
          >
            Sign up
          </Button>
        </Box>
      </form>
      <Box className={classes.join}>
        <label className={classes.alreadyAccountSpacing} onClick={check1}>
          Already have an account? <b>Login</b>
        </label>
      </Box>
      <Box className={classes.termServices}>
        <label>
          By signing up, you are agreeing to our <b>Terms of Services</b> and
          our <b>Privacy Policy</b> - Your California Rights
        </label>
      </Box>
    </Box>
  );
}
