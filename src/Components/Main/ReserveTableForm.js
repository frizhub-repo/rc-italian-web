import React, { useState } from "react";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { reserveTable } from "api/customer";
import { toast } from "react-toastify";
import { CircularProgress } from "@material-ui/core";

const useStyle = () => ({
  container: {
    padding: "10px",
  },
  nameContainer: {},
  nameInput: {
    border: "1px solid #eee",
    width: "45%",
    borderRadius: "20px",
    fontSize: "18px",
    padding: "10px",
  },
  button: {
    borderRadius: "23px",
  },
  label: {
    flex: 1,
    marginTop: "20px",
    marginBotton: "15px",
    fontSize: "24px",
  },
  secondaryBtn: {
    border: "1px solid #B29051",
    color: "#B29051",
  },
  keyAlignMent: {
    display: "flex",
    textAlign: "left",
    marginLeft: "10px",
  },
  progressbarSpacing: {
    marginRight: "8px",
  },
  datePickerRoot: {
    display: "flex",
    alignItems: "center",
  },
});

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const nextTomorrow = new Date(today);
nextTomorrow.setDate(nextTomorrow.getDate() + 2);

const timeSlots = {
  Breakfast: ["11:30", "12:00", "12:30", "13:00", "13:30"],
  Dinner: ["19:30", "20:00", "20:30", "21:00", "21:30"],
};

export default function ReserveTableForm() {
  const styles = useStyle();
  const [loading, setLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [reservation, setReservation] = useState({
    numberOfPeople: 3,
    services: "lunch",
    timeSlot: "12:00",
  });

  const reserveTableHandler = async () => {
    setLoading(true);
    try {
      const payload = { ...reservation, startTime: startDate };
      console.log("payload :>> ", payload);
      await reserveTable(payload);
      toast.success("Reservation has been created successfully");
      setLoading(false);
    } catch (error) {
      toast.error("Error occured while creating reservation");
      console.log({ error });
      setLoading(false);
    }
  };

  const handleChangeTimeSlot = (timeSlot) => {
    setReservation((prev) => ({ ...prev, timeSlot }));
  };

  function handleClickPeople(people) {
    setReservation((prev) => ({ ...prev, numberOfPeople: people }));
  }

  function handleClickMeal(m) {
    setReservation((prev) => ({ ...prev, services: m }));
  }

  const handleShowCalendar = () => setShowCalendar(true);

  return (
    <div style={styles.container}>
      <h1>Reserve your table</h1>
      <form>
        <div className="d-flex justify-content-around mt-4">
          <input
            style={styles.nameInput}
            className="shadow-md"
            type="text"
            placeholder="Full Name"
          />
          <input
            style={styles.nameInput}
            className="shadow-md"
            type="text"
            placeholder="Mobile Number"
          />
        </div>
        <label style={styles.label}>Number of People</label>
        <div className="row">
          {[1, 2, 3, 4].map((people, index) => {
            return (
              <div className="col-6 col-md-3">
                <button
                  id={index}
                  className="btn btn-lg btn-outline"
                  type="button"
                  onClick={() => handleClickPeople(people)}
                  style={{
                    ...styles.button,
                    background:
                      reservation?.numberOfPeople === people
                        ? "#B29051"
                        : "white",
                    color:
                      reservation?.numberOfPeople === people ? "white" : "grey",
                  }}
                >
                  {people}
                </button>
              </div>
            );
          })}
        </div>
        <label style={styles.label}>Which one you want to reserve?</label>
        <div className="row">
          {["breakfast", "lunch", "dinner"].map((service, index) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4">
                <button
                  id={index}
                  className="btn btn-lg btn-outline"
                  type="button"
                  onClick={() => handleClickMeal(service)}
                  style={{
                    ...styles.button,
                    background:
                      service === reservation?.services ? "#B29051" : "white",
                    color: service === reservation?.services ? "white" : "grey",
                  }}
                >
                  {service}
                </button>
              </div>
            );
          })}
        </div>
        <div style={styles.datePickerRoot}>
          <label style={styles.label}>When you want to reserve?</label>
          {showCalendar ? (
            <DatePicker
              minDate={today}
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
              }}
            />
          ) : (
            <div title="Choose date">
              <CalendarTodayIcon onClick={handleShowCalendar} />
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4">
            <button
              className="btn btn-lg btn-outline"
              type="button"
              onClick={() => setStartDate(today)}
              style={{
                ...styles.button,
                background:
                  today.toLocaleDateString() === startDate.toLocaleDateString()
                    ? "#B29051"
                    : "white",
                color:
                  today.toLocaleDateString() === startDate.toLocaleDateString()
                    ? "white"
                    : "grey",
              }}
            >
              Today
            </button>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4">
            <button
              className="btn btn-lg btn-outline"
              type="button"
              onClick={() => setStartDate(tomorrow)}
              style={{
                ...styles.button,
                background:
                  tomorrow.toLocaleDateString() ===
                  startDate.toLocaleDateString()
                    ? "#B29051"
                    : "white",
                color:
                  tomorrow.toLocaleDateString() ===
                  startDate.toLocaleDateString()
                    ? "white"
                    : "grey",
              }}
            >
              Tomorrow
            </button>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4">
            <button
              className="btn btn-lg btn-outline"
              type="button"
              onClick={() => setStartDate(nextTomorrow)}
              style={{
                ...styles.button,
                background:
                  nextTomorrow.toLocaleDateString() ===
                  startDate.toLocaleDateString()
                    ? "#B29051"
                    : "white",
                color:
                  nextTomorrow.toLocaleDateString() ===
                  startDate.toLocaleDateString()
                    ? "white"
                    : "grey",
              }}
            >
              {nextTomorrow.toLocaleDateString()}
            </button>
          </div>
        </div>
        <div>
          <label style={styles.label}>Choose time slots</label>

          {Object.entries(timeSlots).map(([key, value], index) => (
            <div>
              <label style={styles.keyAlignMent}>{key}</label>
              <div>
                {value?.map((time) => (
                  <button
                    type="button"
                    className="btn btn-lg btn-outline"
                    onClick={() => handleChangeTimeSlot(time)}
                    style={{
                      ...styles.button,
                      background:
                        reservation.timeSlot === time ? "#B29051" : "white",
                      color: reservation.timeSlot === time ? "white" : "grey",
                    }}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="btn btn-outline btn-lg btn-block mt-5"
          style={styles.button}
        >
          Schedule a Hour
        </button>
        <button
          type="button"
          onClick={reserveTableHandler}
          className="btn btn-outline btn-lg btn-block mt-3"
          style={{ ...styles.button, ...styles.secondaryBtn }}
        >
          {loading && (
            <CircularProgress
              color="inherit"
              size={20}
              style={styles.progressbarSpacing}
            />
          )}
          Book your Reservation
        </button>
        <button></button>
      </form>
    </div>
  );
}
