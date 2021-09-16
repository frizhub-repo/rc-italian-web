import React from "react";
import classes from "./ActionBox.module.css";

export default function AllergyAlert() {
  return (
    <div className={classes.allergyContainer}>
      <img src="assets/alert.png" />
      <p className="mb-0">
        If you’ve got any allergies or intollerances (for you or any one of your
        friends)
      </p>
      <button className={classes.allergyActionBtn}>CLICK HERE</button>
    </div>
  );
}
