import React from "react";

const useStyle = () => ({
  container: {
    color: "white",
    padding: "10px 30px",
  },
  verticalContainer: {
    width: "40%",
  },
  heading: {
    color: "#B29051",
    textDecoration: "underline",
  },
});

export default function InformationOption() {
  const styles = useStyle();

  return (
    <div
      style={styles.container}
      className="d-flex justify-content-around align-items-center flex-column flex-lg-row"
    >
      <div
        style={styles.verticalContainer}
        className="d-flex flex-column align-items-center"
      >
        <div className="d-flex flex-column align-items-center mb-3">
          <h5 style={styles.heading}>Chef:</h5>
          <h5>Misha Sukays</h5>
        </div>
        <div className="d-flex flex-column align-items-center mb-3">
          <h5 style={styles.heading}>Directions:</h5>
          <h5>Lombardy, Metropolitan City of Milan</h5>
        </div>
      </div>
      <div
        style={styles.verticalContainer}
        className="d-flex flex-column align-items-center"
      >
        <div className="d-flex flex-column align-items-center mb-3">
          <h5 style={styles.heading}>How to get to the restaurant:</h5>
          <h5>Via Firenze 50013 Campi Bisenzio FI</h5>
        </div>
        <div className="d-flex flex-column align-items-center mb-3">
          <h5 style={styles.heading}>Features:</h5>
          <h5>
            Faishonable, Return to the Restaurant, Return to the Restaurant -50%
          </h5>
        </div>
      </div>
    </div>
  );
}
