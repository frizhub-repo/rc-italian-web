import * as React from "react";
import { IconButton } from "rsuite";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import classes from "./Auth.module.css";
import SocialAuth from "./SocialAuth"
import FieldError from "Components/Common/FieldError"
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

export default function SignUp({ check1, handleClose, setOpenDelivery }) {
  const { register, handleSubmit, errors, watch } = useForm();
  const [isPassVisible, setIsPassVisible] = React.useState(false);
  const [isRePassVisible, setIsRePassVisible] = React.useState(false);
  const history = useHistory();

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.header}>Sign Up</h1>
      </div>
      <div className={classes.inputContainer}>
        <form onSubmit={handleSubmit(e => e.preventDefault())}>
          <input
            name="firstName"
            className={classes.authInput}
            type="text"
            placeholder="First Name"
            ref={register({ required: "First Name is required" })}
          />
          {errors?.firstName?.message && <FieldError message={errors?.firstName?.message} />}
          <input
            name="lastName"
            className={classes.authInput}
            type="text"
            placeholder="Last Name"
            ref={register({ required: "Last Name is required" })}
          />
          {errors?.lastName?.message && <FieldError message={errors?.lastName?.message} />}
          <input
            name="phone"
            className={classes.authInput}
            type="text"
            placeholder="Phone Number"
            ref={register({ required: "Phone number is required" })}
          />
          {errors?.phone?.message && <FieldError message={errors?.phone?.message} />}
          <input
            name="email"
            className={classes.authInput}
            type="text"
            placeholder="Email"
            ref={register({ required: "Email is required" })}
          />
          {errors?.email?.message && <FieldError message={errors?.email?.message} />}
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
          {errors?.password?.message && <FieldError message={errors?.password?.message} />}
          <div className={classes.passwordContainer}>
            <input
              name="rePassword"
              className={classes.authInput}
              type={isRePassVisible ? "text" : "password"}
              placeholder="Confirm Password"
              ref={register({
                required: "Please re-type your password", validate: (value) =>
                  value === watch("password") || "Password does not match"
              })}
            />
            <IconButton
              className={classes.iconContainer}
              onClick={() => setIsRePassVisible((prev) => !prev)}
            >
              {isRePassVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </div>
          {errors?.rePassword?.message && <FieldError message={errors?.rePassword?.message} />}
          <div style={{ marginBottom: "20px" }}></div>
          <button type="submit" className={classes.submitBtn}>
            Sign Up
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
  )
    ;
}
