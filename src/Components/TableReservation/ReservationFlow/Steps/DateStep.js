import * as React from "react";
import Calendar from "react-calendar";
import classes from "./Step.module.css";

function Discount({ total, isActive }) {
  return (
    <div
      className={`${classes.dateDiscount} ${
        isActive && classes.dateDiscount_active
      } shadow-md`}
    >
      <p style={{ margin: "0px" }}>-20%</p>
    </div>
  );
}

export default function DateStep({ detail, setDetail }) {
  function updateDate(e) {
    setDetail({ ...detail, date: e });
  }

  function discountDisplay({ activeStartDate, date, view }) {
    if (true)
      return <Discount isActive={date.getTime() === detail?.date?.getTime()} />;
    return null;
  }

  return (
    <div>
      <div className={classes.container}>
        <Calendar
          onChange={updateDate}
          value={detail?.date}
          showNeighboringMonth={false}
          prevLabel={"<"}
          nextLabel={">"}
          minDate={new Date()}
          tileContent={discountDisplay}
        />
      </div>
    </div>
  );
}
