import CustomText from "Components/Common/CustomText/CustomText";
import * as React from "react";
import { useForm } from "react-hook-form";
import classes from "./Menus.module.css";

export default function Setting() {
  const { register, errors, handleSubmit } = useForm();

  const [isPassVisible, setIsPassVisible] = React.useState(false);
  const [isRePassVisible, setIsRePassVisible] = React.useState(false);

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.header}>Settings</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit((e) => e.preventDefault())}>
          <CustomText
            placeholder="Old Email"
            name="oldEmail"
            register={register}
          />
          <CustomText
            placeholder="New Email"
            name="newEmail"
            register={register}
          />
          <CustomText
            placeholder="Old Password"
            name="oldPass"
            register={register}
            isPassword={true}
            isVisible={isPassVisible}
            setIsVisible={setIsPassVisible}
          />
          <CustomText
            placeholder="New Password"
            name="newPass"
            register={register}
            isPassword={true}
            isVisible={isRePassVisible}
            setIsVisible={setIsRePassVisible}
          />
          <div className="mt-4">
            <button type="submit" className={classes.customBtn}>
              Save Changes
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
