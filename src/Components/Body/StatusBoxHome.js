import { useScrollTrigger } from "@material-ui/core";
import React from "react";
import { useScrollSection } from "react-scroll-section";

const useStyles = () => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px",
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
});

export default function StatusBoxHome({ isOpened }) {
  const styles = useStyles();
  const openingHourSection = useScrollSection("opening-hour");

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.subContainer,
          background: `${isOpened ? "#B29051" : "#B91010"}`,
          borderRadius: "10px 0px 0px 10px",
          boxShadow: "7px 4px 16px 0px rgba(0,0,0,0.75)",
        }}
      >
        <img src="assets/reservation.png" width={70} />
      </div>
      <div
        className="d-none d-md-block"
        style={{
          ...styles.subContainer,
          background: `${isOpened ? "#B29051" : "#B91010"}`,
          color: "white",
          boxShadow: "7px 4px 16px 0px rgba(0,0,0,0.75)",
        }}
      >
        <h4>{isOpened ? "Now Opened" : "Now Closed - Opening:"}</h4>
        <h4>From 12:00 - To 15:30</h4>
      </div>
      <button
        onClick={openingHourSection.onClick}
        style={{
          ...styles.subContainer,
          background: "white",
          border: `4px solid ${isOpened ? "#B29051" : "#B91010"}`,
          borderRadius: "0px 10px 10px 0px",
          boxShadow: "7px 4px 16px 0px rgba(0,0,0,0.75)",
        }}
      >
        <h4>Click for Opening Hours</h4>
        <img src="assets/down-sign.png" width={30} />
      </button>
    </div>
  );
}
