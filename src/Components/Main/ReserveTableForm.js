import React from "react";

const useStyle = () => ({
  container: {
    padding: "2vw",
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
    fontSize: "1.5vw",
  },
  secondaryBtn: {
    border: "1px solid #B29051",
    color: "#B29051",
  },
});

export default function ReserveTableForm() {
  const styles = useStyle();

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
        <div className="d-flex justify-content-between">
          <button className="btn btn-lg btn-outline" style={styles.button}>
            1
          </button>
          <button className="btn btn-lg btn-outline" style={styles.button}>
            2
          </button>
          <button className="btn btn-lg btn-outline" style={styles.button}>
            3
          </button>
          <button className="btn btn-lg btn-outline" style={styles.button}>
            4
          </button>
        </div>
        <label style={styles.label}>Which one you want to reserve?</label>
        <div className="d-flex justify-content-between">
          <button className="btn btn-lg btn-outline" style={styles.button}>
            Today
          </button>
          <button className="btn btn-lg btn-outline" style={styles.button}>
            Tomorrow
          </button>
          <button className="btn btn-lg btn-outline" style={styles.button}>
            Choose
          </button>
        </div>
        <button
          className="btn btn-outline btn-lg btn-block mt-3"
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
