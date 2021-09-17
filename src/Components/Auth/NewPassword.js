import React from "react";
import FieldError from "Components/Common/FieldError";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router";
import { resetPassword } from "api/customer";
import CustomText from "Components/Common/CustomText/CustomText";
import classes from "./Auth.module.css";
import { toast } from "react-toastify";

const styles = {
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
  const [isPassVisible, setIsPassVisible] = React.useState(false);
  const [isRePassVisible, setIsRePassVisible] = React.useState(false);
  const { errors, handleSubmit, register, watch } = useForm();
  const history = useHistory();
  const { id, code } = useParams();

  React.useEffect(() => {
    if (history?.location?.state?.from !== "resetPassword") history.goBack();
  }, []);

  async function updatePassword(data) {
    try {
      data.code = parseInt(code);
      const res = await resetPassword({ id, data });
      if (res?.status === 200) {
        toast.success("Password updated successfully");
        history.push("/signIn");
      }
    } catch (e) {
      console.log(e);
      toast.error("Password cannot be updated");
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.emailContainer}>
        <div style={{ textAlign: "start", marginBottom: "5px" }}>
          <h3>Change your Password</h3>
          <hr className={classes.divider} />
          <h5>Please enter a new password (at least 8 characters long)</h5>
        </div>
        <form onSubmit={handleSubmit(updatePassword)}>
          <CustomText
            placeholder="New Password"
            name="password"
            register={register}
            isPassword={true}
            isVisible={isPassVisible}
            setIsVisible={setIsPassVisible}
            validationRule={{
              required: true,
              minLength: 8,
            }}
          />
          {errors?.password?.type === "required" && (
            <FieldError message={"New password is required"} />
          )}
          {errors?.password?.type === "minLength" && (
            <FieldError message={"Password must be 8 characters long"} />
          )}
          <CustomText
            placeholder="Re-type Password"
            name="rePassword"
            register={register}
            isPassword={true}
            isVisible={isRePassVisible}
            setIsVisible={setIsRePassVisible}
            validationRule={{
              required: true,
              validate: (value) => value === watch("password"),
            }}
          />
          {errors?.rePassword?.type === "required" && (
            <FieldError message={"Re-typing password is required"} />
          )}
          {errors?.rePassword?.type === "validate" && (
            <FieldError message={"Password does not match"} />
          )}
          <hr className={classes.divider} />
          <div className="d-flex justify-content-end">
            <button style={styles.searchBtn} type="submit">
              Update
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
