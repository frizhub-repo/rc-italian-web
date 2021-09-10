import * as React from "react";
import classes from "./Stepper.module.css";

function Arrow() {
  return (
    <div className={classes.arrow_container}>
      <span className={classes.arrow_text}>&gt;</span>
    </div>
  );
}

export default function Stepper({ active, setActive }) {
  return (
    <div className="d-flex shadow-md">
      <div
        className={`${classes.step} ${classes.active}`}
        onClick={() => setActive(0)}
      >
        <img src={"assets/user.png"} width={35} height={35} />
        <Arrow />
      </div>
      <div
        className={`${classes.step} ${active >= 1 && classes.active}`}
        onClick={() => active > 1 && setActive(1)}
      >
        <img src={`assets/calendar-white.png`} width={35} height={35} />
        <Arrow />
      </div>
      <div
        className={`${classes.step} ${active >= 2 && classes.active}`}
        onClick={() => active > 2 && setActive(2)}
      >
        <img src={`assets/clock-white.png`} width={35} height={35} />
        <Arrow />
      </div>
      <div className={`${classes.step} ${active === 3 && classes.active}`}>
        <img src={`assets/percentage-white.png`} width={35} height={35} />
      </div>
    </div>
  );
}
