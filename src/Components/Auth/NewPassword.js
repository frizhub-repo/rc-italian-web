import React from "react";
import FieldError from "Components/Common/FieldError";
import { useForm } from "react-hook-form";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router";
import classes from "./Auth.module.css";

const styles = {
  inputStyle: {
    background: "#1a1b20",
    padding: "10px",
    fontSize: "18px",
    borderRadius: "5px",
    width: "100%",
    margin: "10px",
    color: "white",
  },
  containerStyle: {
    justifyContent: "space-between",
  },
  cancelBtn: {
    border: "1px solid #1a1b20",
    fontSize: "18px",
    color: "#1a1b20",
    padding: "8px",
    borderRadius: "5px",
    marginRight: "10px",
  },
  searchBtn: {
    background: "#1a1b20",
    color: "#b29051",
    fontSize: "18px",
    padding: "8px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default function NewPassword() {
  const [isWaiting, setIsWaiting] = React.useState(false);
  const { errors, handleSubmit, register, watch } = useForm();
  const history = useHistory();

  React.useEffect(() => {
    if (history?.location?.state?.from !== "resetPassword") history.goBack();
  }, []);

  React.useEffect(() => console.log(errors), [errors]);

  return (
    <div className={classes.root}>
      <div className={classes.emailContainer}>
        <div style={{ textAlign: "start", marginBottom: "5px" }}>
          <h3>Change your Password</h3>
          <hr className={classes.divider} />
          <h5>Please enter a new password (at least 8 characters long)</h5>
        </div>
        <form onSubmit={handleSubmit((e) => e.preventDefault())}>
          <input
            name="password"
            className={classes.authInput}
            type="text"
            placeholder="New Password"
            ref={register({
              required: true,
              minLength: 8,
            })}
          />
          {errors?.password?.type === "required" && (
            <FieldError message={"New password is required"} />
          )}
          {errors?.password?.type === "minLength" && (
            <FieldError message={"Password must be 8 characters long"} />
          )}
          <input
            name="rePassword"
            className={classes.authInput}
            type="text"
            placeholder="Re-type Password"
            ref={register({
              required: true,
              validate: (value) => watch("password") === value,
            })}
          />
          {errors?.rePassword?.type === "required" && (
            <FieldError message={"Re-typing password is required"} />
          )}
          {errors?.rePassword?.type === "validate" && (
            <FieldError message={"Password does not match"} />
          )}
          <hr className={classes.divider} />
          <div className="d-flex justify-content-end">
            <button style={styles.cancelBtn} onClick={() => history.goBack()}>
              Cancel
            </button>
            <button style={styles.searchBtn} type="submit">
              Search
              {isWaiting && (
                <CircularProgress
                  color="inherit"
                  size={20}
                  style={{ marginLeft: "8px" }}
                />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
