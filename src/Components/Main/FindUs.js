import React from "react";

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
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  },
  map: {
    margin: "30px",
    width: "100%",
    height: "50vh",
  },
});

export default function FindUs({ formattedAddress, phoneNumber }) {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>You can find us here!</h1>
      <div style={styles.contentContainer}>
        <h2 className="my-4">Da Ciccio</h2>
        <p>{phoneNumber}</p>
        <p>{formattedAddress}</p>
      </div>
    </div>
  );
}
