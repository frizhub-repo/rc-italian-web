import CustomSelect from "Components/Common/CustomSelect/CustomSelect";
import CustomText from "Components/Common/CustomText/CustomText";
import * as React from "react";
import { useForm } from "react-hook-form";
import classes from "./Menus.module.css";

export default function Account() {
  const { register, errors, handleSubmit } = useForm();

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.header}>Account</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit((e) => e.preventDefault())}>
          <CustomText
            placeholder={"Name"}
            name={"name"}
            register={register}
            type="text"
          />
          <CustomText
            placeholder={"Surname"}
            name={"surname"}
            register={register}
            type="text"
          />
          <CustomSelect
            placeholder={"Gender"}
            values={["Male", "Female", "Other"]}
            register={register}
            name={"gender"}
          />
          <CustomText placeholder={"City"} name={"city"} register={register} />
          <CustomText name={"Date"} type="date" register={register} />
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
