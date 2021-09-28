import { useScrollTrigger } from "@material-ui/core";
import { useUserContext } from "Context/userContext";
import React from "react";
import { useScrollSection } from "react-scroll-section";

const useStyles = () => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px",
    boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
});

export default function StatusBoxMenu() {
  const styles = useStyles();
  const openingHourSection = useScrollSection("opening-hour");
  const {
    restaurant: { placeData: { opening_hours: { open_now } = {} } = {} },
  } = useUserContext();
  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.subContainer,
          background: `${open_now ? "#B29051" : "#B91010"}`,
          borderRadius: "10px 0px 0px 10px",
          boxShadow: "4px 0px 5px 2px rgb(0 0 0 / 25%)",
          zIndex: 1,
        }}
      >
        <img src="assets/reservation.png" width={70} />
      </div>
      <div
        style={{
          ...styles.subContainer,
          background: `${open_now ? "#B29051" : "#B91010"}`,
          color: "white",
          borderRadius: "0px 10px 10px 0px",
        }}
      >
        <h4>{open_now ? "Now Opened" : "Now Closed - Opening:"}</h4>
        <h4>From 12:00 - To 15:30</h4>
      </div>
    </div>
  );
}
