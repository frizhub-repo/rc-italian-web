import * as React from "react";
import classes from "./Step.module.css";

function Discount({ total, isActive }) {
  return (
    <div
      className={`${classes.discountContainer} ${
        isActive && classes.active_discount
      } shadow-md`}
    >
      <small>-{total}%</small>
    </div>
  );
}

export default function TimeStep({ detail, setDetail }) {
  const [timings, setTimings] = React.useState([
    { name: "Breakfast", slots: ["11:00", "12:00", "01:00", "02:00"] },
    { name: "Lunch", slots: ["11:00", "12:00", "01:00", "02:00"] },
    { name: "Dinner", slots: ["11:00", "12:00", "01:00", "02:00"] },
  ]);

  function updateTime(name, slot) {
    setDetail({ ...detail, time: { name, slot } });
  }

  return (
    <div className={classes.container}>
      <h3 className={classes.header}>Choose an Hour</h3>
      <div className={`${classes.contentContainer} custom-scroll`}>
        {timings.map((timing) => (
          <div>
            <h5 className={classes.secondaryHeader}>{timing.name}:</h5>
            <div className="row mx-2">
              {timing.slots.map((slot, index) => (
                <div key={index} className="col-4 my-2">
                  <div
                    className={`${classes.item} ${
                      timing.name === detail?.time?.name &&
                      slot === detail?.time?.slot &&
                      classes.active_item
                    } shadow-md`}
                    onClick={() => updateTime(timing.name, slot)}
                  >
                    <h4>{slot}</h4>
                    <Discount
                      isActive={
                        timing.name === detail?.time?.name &&
                        slot === detail?.time?.slot
                      }
                      total={"20"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
