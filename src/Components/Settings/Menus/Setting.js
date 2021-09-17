import CustomText from "Components/Common/CustomText/CustomText";
import * as React from "react";
import { useForm } from "react-hook-form";
import classes from "./Menus.module.css";
import { changePassword } from "api/customer";
import { toast } from "react-toastify";
import FieldError from "Components/Common/FieldError";
import { CircularProgress } from "@material-ui/core";

export default function Setting() {
  const { register, errors, handleSubmit, reset } = useForm();
  const [isPassVisible, setIsPassVisible] = React.useState(false);
  const [isRePassVisible, setIsRePassVisible] = React.useState(false);
  const [isWaiting, setIsWaiting] = React.useState(false);

  async function changePasswordWithPayload(data) {
    try {
      setIsWaiting(true);
      const res = await changePassword(data);
      if (res?.status === 200) toast.success("Updated password successfully");
      setIsWaiting(false);
      reset();
    } catch (e) {
      console.log(e);
      setIsWaiting(false);
      toast.error("Could not update password");
    }
  }

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.header}>Settings</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit(changePasswordWithPayload)}>
          <CustomText
            placeholder="Old Password"
            name="existingPassword"
            register={register}
            isPassword={true}
            isVisible={isPassVisible}
            setIsVisible={setIsPassVisible}
            validationRule={{
              required: true,
            }}
          />
          {errors?.existingPassword?.type === "required" && (
            <FieldError message={"Old password is required"} />
          )}
          <CustomText
            placeholder="New Password"
            name="newPassword"
            register={register}
            isPassword={true}
            isVisible={isRePassVisible}
            setIsVisible={setIsRePassVisible}
            validationRule={{
              required: true,
              minLength: 8,
            }}
          />
          {errors?.newPassword?.type === "required" && (
            <FieldError message={"New password is required"} />
          )}
          {errors?.newPassword?.type === "minLength" && (
            <FieldError message={"Password must be 8 characters long"} />
          )}
          <div className="mt-4">
            <button
              type="submit"
              className={classes.customBtn}
              disabled={isWaiting}
            >
              Save Changes
              {isWaiting && (
                <CircularProgress
                  color="inherit"
                  size={20}
                  style={{ marginLeft: "8px" }}
                />
              )}
            </button>
            <p className="text-white">
              We save those information in order to send you the best offers
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
