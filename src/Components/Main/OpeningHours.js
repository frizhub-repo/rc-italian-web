import React from "react";
import "./openingHours.css";

const useStyle = () => ({
  container: {
    padding: "30px 60px",
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
    borderCollapse: "collapse",
  },
  headerImage: {
    margin: "auto",
  },
});

export default function OpeningHours() {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Opening Hours</h1>
      <table style={styles.table}>
        <thead>
          <th colSpan="2">
            <img style={styles.headerImage} src="assets/clock.png" />
          </th>
        </thead>
        <tr>
          <td>Sunday</td>
          <td>Closed</td>
        </tr>
        <tr>
          <td>Monday</td>
          <td>13:00 - 15:30 / 21:00 - 01:00</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>13:30 - 15:30</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>13:30 - 15:30</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>13:30 - 15:30</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>13:30 - 15:30</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>13:00 - 15:30 / 21:00 - 01:00</td>
        </tr>
      </table>
    </div>
  );
}
