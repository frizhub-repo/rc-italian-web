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

export default function FindUs() {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>You can find us here!</h1>
      <div style={styles.contentContainer}>
        <div style={styles.map}>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ borderRadius: "20px" }}
          ></iframe>
        </div>

        <h2 className="my-4">Da Ciccio</h2>
        <p>Via Firenze</p>
        <p>50013 Campi Bisenzio FI</p>
      </div>
    </div>
  );
}
