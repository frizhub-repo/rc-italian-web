import * as React from "react";
import { getMaxValue, isEmpty } from "utils/common";
import classes from "./Step.module.css";

function Discount({ offers, isActive }) {
  const maxValue = getMaxValue(offers, "discountPrice");

  return (
    <>
      {maxValue?.count > 0 && (
        <div
          className={`${classes.discountContainer} ${
            isActive && classes.active_discount
          } shadow-md`}
        >
          <small>-{maxValue?.count}%</small>
        </div>
      )}
    </>
  );
}

export default function TimeStep({
  offers,
  parameters,
  setParameters,
  selectedOffer,
}) {
  const [timeSlots, setTimeSlots] = React.useState([
    {
      name: "breakfast",
      slots: {
        "11:30": [],
        "12:00": [],
        "12:30": [],
        "13:00": [],
        "13:30": [],
        "13:40": [],
      },
    },
    {
      name: "dinner",
      slots: {
        "19:30": [],
        "20:00": [],
        "20:30": [],
        "21:00": [],
        "21:30": [],
        "22:00": [],
        "22:30": [],
        "23:00": [],
      },
    },
  ]);

  React.useEffect(() => {
    if (!isEmpty(selectedOffer)) {
      let timeSlotOffer = [...timeSlots];
      timeSlotOffer?.map((timeObj, index) => {
        Object.entries(timeObj.slots).map(([slot, offerObj]) => {
          if (
            slot >= selectedOffer?.groupTimeSlot?.startHour &&
            slot <= selectedOffer?.groupTimeSlot?.endHour
          ) {
            timeSlotOffer[index].slots[slot] = [selectedOffer];
          }
          if (selectedOffer?.hourlyTimeSlots?.includes(slot)) {
            timeSlotOffer[index].slots[slot] = [selectedOffer];
          }
        });
      });
      setTimeSlots(timeSlotOffer);
    } else {
      let timeSlotOffer = [...timeSlots];
      for (const offer of offers) {
        timeSlotOffer?.map((timeObj, index) => {
          Object.entries(timeObj.slots).map(([slot, offerObj]) => {
            if (
              slot >= offer?.groupTimeSlot?.startHour &&
              slot <= offer?.groupTimeSlot?.endHour
            ) {
              timeSlotOffer[index].slots[slot] = [
                ...timeSlotOffer[index].slots[slot],
                offer,
              ];
            }
            if (offer?.hourlyTimeSlots?.includes(slot)) {
              timeSlotOffer[index].slots[slot] = [
                ...timeSlotOffer[index].slots[slot],
                offer,
              ];
            }
          });
        });
      }
      setTimeSlots(timeSlotOffer);
    }
  }, [selectedOffer, offers]);

  function updateTime(name, slot, value) {
    setParameters({
      ...parameters,
      time: { name, slot },
    });
  }

  return (
    <div className={classes.container}>
      <h3 className={classes.header}>Choose an Hour</h3>
      <div className={`${classes.contentContainer} custom-scroll`}>
        {timeSlots.map(({ name, slots }) => (
          <div>
            <h5 className={classes.secondaryHeader}>{name}:</h5>
            <div className="row mx-2">
              {Object.entries(slots).map(([slot, value], index) => (
                <div key={index} className="col-4 my-2">
                  <div
                    className={`${classes.item} ${
                      name === parameters?.time?.name &&
                      slot === parameters?.time?.slot &&
                      classes.active_item
                    } shadow-md`}
                    onClick={() => updateTime(name, slot, value)}
                  >
                    <h4>{slot}</h4>
                    <Discount
                      isActive={
                        name === parameters?.time?.name &&
                        slot === parameters?.time?.slot
                      }
                      offers={value}
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
