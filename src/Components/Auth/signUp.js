import * as React from "react";
import { IconButton } from "rsuite";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import classes from "./Auth.module.css";
import SocialAuth from "./SocialAuth";
import FieldError from "Components/Common/FieldError";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { toast } from "react-toastify";
import { customerSignUp } from "api/customer";
import { useUserContext } from "Context/userContext";
import axiosIntance from "utils/axios-configured";
import { CircularProgress } from "@material-ui/core";
import { EMAIL_REGEX } from "utils/types";

export default function SignUp({ check1, handleClose, setOpenDelivery }) {
  const { register, handleSubmit, errors, watch } = useForm();
  const [isPassVisible, setIsPassVisible] = React.useState(false);
  const [isRePassVisible, setIsRePassVisible] = React.useState(false);
  const { setToken, refetchCustomerHandler } = useUserContext();
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);

  async function signUpWithPayload(data) {
    setLoading(true);
    try {
      const res = await customerSignUp(data);
      if (res.status === 200) {
        axiosIntance.defaults.headers.common["Authorization"] =
          res?.data?.data?.token;
      }
      localStorage.setItem("token", res?.data?.data?.token);
      setToken(res?.data?.data?.token);
      refetchCustomerHandler();
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
        <h1 className={classes.header}>Sign Up</h1>
      </div>
      <div className={classes.inputContainer}>
        <form onSubmit={handleSubmit(signUpWithPayload)}>
          <input
            name="firstName"
            className={classes.authInput}
            type="text"
            placeholder="First Name"
            ref={register({ required: "First Name is required" })}
          />
          {errors?.firstName?.message && (
            <FieldError message={errors?.firstName?.message} />
          )}
          <input
            name="lastName"
            className={classes.authInput}
            type="text"
            placeholder="Last Name"
            ref={register({ required: "Last Name is required" })}
          />
          {errors?.lastName?.message && (
            <FieldError message={errors?.lastName?.message} />
          )}
          <input
            name="phoneNumber"
            className={classes.authInput}
            type="text"
            placeholder="Phone Number"
            ref={register({ required: "Phone number is required" })}
          />
          {errors?.phoneNumber?.message && (
            <FieldError message={errors?.phoneNumber?.message} />
          )}
          <input
            name="email"
            className={classes.authInput}
            type="text"
            placeholder="Email"
            ref={register({
              required: "Email is required",
              pattern: EMAIL_REGEX,
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
              ref={register({ required: "Password is required", minLength: 8 })}
            />
            <IconButton
              className={classes.iconContainer}
              onClick={() => setIsPassVisible((prev) => !prev)}
            >
              {isPassVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </div>
          {errors?.password?.type === "minLength" && (
            <FieldError message={"Password must be 8 characters long"} />
          )}
          {errors?.password?.message && (
            <FieldError message={errors?.password?.message} />
          )}
          <div className={classes.passwordContainer}>
            <input
              name="rePassword"
              className={classes.authInput}
              type={isRePassVisible ? "text" : "password"}
              placeholder="Confirm Password"
              ref={register({
                required: "Please re-type your password",
                minLength: 8,
                validate: (value) =>
                  value === watch("password") || "Password does not match",
              })}
            />
            <IconButton
              className={classes.iconContainer}
              onClick={() => setIsRePassVisible((prev) => !prev)}
            >
              {isRePassVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </div>
          {errors?.rePassword?.message && (
            <FieldError message={errors?.rePassword?.message} />
          )}
          {errors?.rePassword?.type === "minLength" && (
            <FieldError message={"Password must be 8 characters long"} />
          )}
          <div style={{ marginBottom: "20px" }}></div>
          <button type="submit" className={classes.submitBtn}>
            {loading && (
              <CircularProgress
                color="inherit"
                size={20}
                style={{ marginRight: "8px" }}
              />
            )}
            <span>Sign Up</span>
          </button>
        </form>
        <div className={classes.secondaryText}>
          <h4>or</h4>
        </div>
        <section>
          <SocialAuth />
        </section>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <h5>If you're already Signed Up</h5>
        <button
          className={classes.redirectBtn}
          onClick={() => history.push("signIn")}
        >
          Click Here
        </button>
      </div>
    </div>
  );
}
