import * as React from "react";
import Calendar from "react-calendar";
import { getMaxValue, isEmpty } from "utils/common";
import classes from "./Step.module.css";

function Discount({ offers, isActive }) {
  const maxOffer = getMaxValue(offers, "discountPrice");

  return (
    <div
      className={`${classes.dateDiscount} ${
        isActive && classes.dateDiscount_active
      } shadow-md`}
    >
      {maxOffer?.count > 0 && (
        <p style={{ margin: "0px" }}>-{maxOffer?.count}%</p>
      )}
    </div>
  );
}

const today = new Date();

export default function DateStep({
  offers,
  parameters,
  setParameters,
  reservationDetail,
  setReservationDetail,
  selectedOffer,
}) {
  React.useEffect(() => {
    if (!isEmpty(selectedOffer)) {
      let days = [];
      for (
        let d = new Date(selectedOffer?.startDate);
        new Date(d.toLocaleDateString()) <=
        new Date(new Date(selectedOffer?.endDate).toLocaleDateString());
        d.setDate(d.getDate() + 1)
      ) {
        const index = days.findIndex((value) => value.day === d);
        index === -1
          ? days.push({
              day: d.toLocaleDateString(),
              offers: [selectedOffer],
            })
          : (days[index] = {
              day: d.toLocaleDateString(),
              offers: [selectedOffer],
            });
      }
      setReservationDetail((prevState) => ({ ...prevState, days }));
    } else {
      let days = [];
      for (const offer of offers) {
        if (new Date(offer?.endDate) >= new Date()) {
          for (
            let d = new Date(offer?.startDate);
            new Date(d.toLocaleDateString()) <=
            new Date(new Date(offer?.endDate).toLocaleDateString());
            d.setDate(d.getDate() + 1)
          ) {
            const index = days.findIndex(
              (value) => value.day === d.toLocaleDateString()
            );
            index === -1
              ? days.push({ day: d.toLocaleDateString(), offers: [offer] })
              : (days[index] = {
                  day: d.toLocaleDateString(),
                  offers: [...days[index].offers, offer],
                });
          }
        }
      }
      setReservationDetail({ ...reservationDetail, days });
    }
  }, [selectedOffer, offers]);

  function updateDate(e) {
    if (reservationDetail?.days?.length > 0) {
      setParameters({
        ...parameters,
        date: { value: e },
      });
    }
  }

  function discountDisplay({ activeStartDate, date, view }) {
    if (reservationDetail?.days?.length > 0) {
      const reserDetail = reservationDetail?.days?.sort(
        (a, b) => a.day - b.day
      );
      const dateIndex = reserDetail?.findIndex(
        (value) =>
          new Date(value?.day).toLocaleDateString() ===
          new Date(date).toLocaleDateString()
      );

      if (dateIndex > -1)
        return (
          <Discount
            isActive={date.getTime() === parameters?.date?.value?.getTime()}
            offers={reserDetail?.[dateIndex]?.offers}
          />
        );
    }
  }

  function tileClassName({ date }) {
    const yesterday = new Date();
    yesterday.setDate(new Date().getDate() - 1);

    if (date.getTime() < yesterday.getTime()) {
      return classes.disableTitle;
    }
  }

  return (
    <div>
      <div className={classes.container}>
        <Calendar
          onChange={updateDate}
          value={parameters?.date?.value}
          showNeighboringMonth={false}
          prevLabel={<span className={classes.calenderArrow}>{"<"}</span>}
          nextLabel={<span className={classes.calenderArrow}>{">"}</span>}
          minDate={today}
          tileClassName={tileClassName}
          tileContent={discountDisplay}
        />
      </div>
    </div>
  );
}
