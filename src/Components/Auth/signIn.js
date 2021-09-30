import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { customerSignIn } from "api/customer";
import FieldError from "Components/Common/FieldError";
import { useUserContext } from "Context/userContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { IconButton } from "rsuite";
import axiosIntance from "utils/axios-configured";
import classes from "./Auth.module.css";
import SocialAuth from "./SocialAuth";
import { CircularProgress } from "@material-ui/core";

export default function SignIn({ handleClose, check2 }) {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const [isPassVisible, setIsPassVisible] = useState(false);
  const { setToken, refetchCustomerHandler } = useUserContext();
  const [loading, setLoading] = useState(false);

  async function signInWithPayload(data) {
    setLoading(true);
    try {
      const res = await customerSignIn(data);
      if (res?.status === 200) {
        axiosIntance.defaults.headers.common["Authorization"] =
          res?.data?.data?.token;
      }
      localStorage.setItem("token", res?.data?.data?.token);
      setToken(res?.data?.data?.token);
      refetchCustomerHandler();
      toast.success("You have been sign in successfully");
      setLoading(false);
      history.push("/");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  }

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.header}>Sign In</h1>
      </div>
      <div className={classes.inputContainer}>
        <form onSubmit={handleSubmit(signInWithPayload)}>
          <input
            name="email"
            className={classes.authInput}
            type="text"
            placeholder="Email"
            ref={register({
              required: "Email is required",
              pattern: /^[a-zA-Z0-9.+]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/,
            })}
          />
          {errors.email?.type === "pattern" && (
            <FieldError message={"Email is not valid."} />
          )}
          {errors?.email?.message && (
            <FieldError message={errors?.email?.message} />
          )}
          <div className={classes.passwordContainer}>
            <input
              name="password"
              className={classes.authInput}
              type={isPassVisible ? "text" : "password"}
              placeholder="Password"
              ref={register({ required: "Password is required" })}
            />
            <IconButton
              className={classes.iconContainer}
              onClick={() => setIsPassVisible((prev) => !prev)}
            >
              {isPassVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </div>
          {errors?.password?.message && (
            <FieldError message={errors?.password?.message} />
          )}
          <div className={classes.forgotPassContainer}>
            <button
              className={classes.forgotPass}
              onClick={() => history.push("forgotPassword")}
            >
              Forgot your password?
            </button>
          </div>
          <button type="submit" className={classes.submitBtn}>
            {loading && (
              <CircularProgress
                color="inherit"
                size={20}
                style={{ marginRight: "8px" }}
              />
            )}
            <span>Login</span>
          </button>
        </form>
        <div className={classes.secondaryText}>
          <h4>or</h4>
        </div>
        <section>
          <SocialAuth />
        </section>
      </div>
      <div>
        <h5>You didn't Sign Up?</h5>
        <button
          className={classes.redirectBtn}
          onClick={() => history.push("signUp")}
        >
          Register Here
        </button>
      </div>
    </div>
  );
}
