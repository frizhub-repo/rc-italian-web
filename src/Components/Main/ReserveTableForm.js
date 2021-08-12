import React, { useState } from "react";

const useStyle = () => ({
  container: {
    padding: "10px 20px",
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
    marginTop: "20px",
    marginBotton: "15px",
    fontSize: "24px",
  },
  secondaryBtn: {
    border: "1px solid #B29051",
    color: "#B29051",
  },
});

export default function ReserveTableForm() {
  const styles = useStyle();
  const [people, setPeople] = useState([
    { num: "1", selected: false },
    { num: "2", selected: false },
    { num: "3", selected: true },
    { num: "4+", selected: false },
  ]);
  const [meals, setMeals] = useState([
    { meal: "Breakfast", selected: false },
    { meal: "Lunch", selected: true },
    { meal: "Dinner", selected: false },
  ]);
  const [times, setTimes] = useState([
    { time: "Today", selected: true },
    { time: "Tomorrow", selected: false },
    { time: "Choose", selected: false },
  ]);

  function handleClickPeople(e) {
    e.preventDefault();
    setPeople(
      people.map((p, index) => ({
        num: p.num,
        selected: e.target.id == index,
      }))
    );
  }

  function handleClickTime(e) {
    e.preventDefault();
    setTimes(
      times.map((t, index) => ({
        time: t.time,
        selected: e.target.id == index,
      }))
    );
  }

  function handleClickMeal(e) {
    e.preventDefault();
    setMeals(
      meals.map((m, index) => ({
        meal: m.meal,
        selected: e.target.id == index,
      }))
    );
  }

  return (
    <div style={styles.container}>
      <h1>Reserve your table</h1>
      <form>
        <div className="d-flex justify-content-between mt-4">
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
          {people.map((p, index) => {
            return (
              <div className="col-sm-6 col-md-3">
                <button
                  id={index}
                  className="btn btn-lg btn-outline"
                  onClick={handleClickPeople}
                  style={{
                    ...styles.button,
                    background: p.selected ? "#B29051" : "white",
                    color: p.selected ? "white" : "grey",
                  }}
                >
                  {p.num}
                </button>
              </div>
            );
          })}
        </div>
        <label style={styles.label}>Which one you want to reserve?</label>
        <div className="row">
          {meals.map((m, index) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4">
                <button
                  id={index}
                  className="btn btn-lg btn-outline"
                  onClick={handleClickMeal}
                  style={{
                    ...styles.button,
                    background: m.selected ? "#B29051" : "white",
                    color: m.selected ? "white" : "grey",
                  }}
                >
                  {m.meal}
                </button>
              </div>
            );
          })}
        </div>
        <label style={styles.label}>When you want to reserve?</label>
        <div className="row">
          {times.map((t, index) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4">
                <button
                  id={index}
                  className="btn btn-lg btn-outline"
                  onClick={handleClickTime}
                  style={{
                    ...styles.button,
                    background: t.selected ? "#B29051" : "white",
                    color: t.selected ? "white" : "grey",
                  }}
                >
                  {t.time}
                </button>
              </div>
            );
          })}
        </div>
        <button
          className="btn btn-outline btn-lg btn-block mt-5"
          style={styles.button}
        >
          Schedule a Hour
        </button>
        <button
          className="btn btn-outline btn-lg btn-block mt-3"
          style={{ ...styles.button, ...styles.secondaryBtn }}
        >
          Book your Reservation
        </button>
        <button></button>
      </form>
    </div>
  );
}
