import * as React from "react";
import { useForm } from "react-hook-form";
import CustomText from "Components/Common/CustomText/CustomText";
import CustomSelect from "Components/Common/CustomSelect/CustomSelect";
import classes from "./Menus.module.css";

export default function Customization() {
  const { errors, handleSubmit, register } = useForm();
  const onSubmit = () => {};
  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.header}>Customization</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomSelect
            placeholder="Preferred Cousine"
            name={"cousine"}
            values={[
              "Italian",
              "Chinese",
              "Continental",
              "English",
              "Japenese",
              "French",
            ]}
          />
          <CustomSelect
            name={"orderNo"}
            placeholder={"How many times do you order?"}
            values={[
              "Less than one per week",
              "More than one per week",
              "Almost every day",
            ]}
            register={register}
          />
          <CustomSelect
            name={"restuarantVisits"}
            placeholder={"How many times do you go to the Restuarant?"}
            values={[
              "Less than one per week",
              "More than one per week",
              "Almost every day",
            ]}
            register={register}
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
