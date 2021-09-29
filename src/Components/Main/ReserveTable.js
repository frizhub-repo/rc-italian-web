import React from "react";
import ReserveTableCard from "./ReserveTableCard";

const useStyle = () => ({
  container: {
    padding: "30px 170px",
    background: "#272727",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontFamily: "Clicker Script",
    fontSize: "8vw",
    color: "#B29051",
  },
});

export default function ReserveTable() {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Want to reserve a table?</h1>
      <ReserveTableCard />
    </div>
  );
}
