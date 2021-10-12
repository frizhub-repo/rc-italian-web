import React from "react";
import { isEmpty } from "utils/common";
import "./openingHours.css";

const useStyle = () => ({
  cell: {
    padding: "12px 0px",
    width: "50%",
    border: "2px solid #997b44",
    fontWeight: "bold",
  },
  container: {
    padding: "30px 60px 0 60px",
    background: "#272727",
  },
  header: {
    fontFamily: "Clicker Script",
    fontSize: "10vw",
    color: "#B29051",
  },
  table: {
    color: "white",
    width: "100%",
    borderCollapse: "inherit",
    borderRadius: "15px",
    boxShadow: "0px 0px 5px 5px rgba(178, 144, 81, 0.25)",
    textTransform: "uppercase",
  },
  headerImage: {
    margin: "auto",
  },
});

export default function OpeningHours({ placeData }) {
  const [openingHours, setOpeningHours] = React.useState([
    { id: 1, openDay: "Monday" },
    { id: 2, openDay: "Tuesday" },
    { id: 3, openDay: "Wednesday" },
    { id: 4, openDay: "Thursday" },
    { id: 5, openDay: "Friday" },
    { id: 6, openDay: "Saturday" },
    { id: 0, openDay: "Sunday" },
  ]);
  React.useEffect(() => {
    formatOpeningHours();
  }, [placeData]);

  const splitTime = (time) => time.slice(0, 2) + ":" + time.slice(2);

  function formatOpeningHours() {
    if (!isEmpty(placeData)) {
      const { opening_hours: { periods = [] } = {} } = placeData;
      for (const { open, close } of periods) {
        setOpeningHours((prevOpeningHours) =>
          prevOpeningHours.map((openingHour) =>
            openingHour?.id === open?.day
              ? {
                  ...openingHour,
                  openTime: splitTime(open?.time),
                  closeTime: splitTime(close?.time),
                }
              : openingHour
          )
        );
      }
    }
  }

  const styles = useStyle();

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Opening Hours</h1>
      <table style={styles.table}>
        <thead>
          <th style={styles.cell} colSpan="2">
            <img
              style={styles.headerImage}
              src="assets/clock.png"
              alt="clock"
              width={60}
            />
          </th>
        </thead>
        {openingHours.map((timing) => (
          <tr className={`${timing?.openTime ? "open" : "closed"}`}>
            <td style={styles.cell}>{timing?.openDay}</td>
            <td style={styles.cell}>
              {timing?.openTime || timing?.closeTime
                ? timing?.openTime + " - " + timing?.closeTime
                : "Closed"}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
