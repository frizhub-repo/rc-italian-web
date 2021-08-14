import React from "react";

const useStyle = () => ({
  container: {
    padding: "30px",
    background: "#272727",
  },
  innerContainer: {
    border: "5px solid #1d1d1d",
    borderRadius: "10px",
    color: "white",
    padding: "20px",
  },
  reserveIcon: {
    border: "3px solid #B29051",
    borderRadius: "10px 0px 0px 10px",
  },
  reserveButton: {
    background: "white",
    border: "3px solid #B29051",
    color: "#B29051",
    width: "100%",
    height: "100%",
  },
  topRightInfo: {
    background: "#B29051",
    color: "white",
    border: "3px solid #B29051",
    borderRadius: "0px 10px 0px 0px",
  },
  bottomRightInfo: {
    background: "white",
    color: "black",
    border: "3px solid #B29051",
    borderRadius: "0px 0px 10px 0px",
  },
});

export default function Info() {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <div className="row d-flex justify-content-around">
          <div className="col-auto row">
            <div style={styles.reserveIcon} className="col-auto m-0">
              <img src="assets/reservation-icon.png" />
            </div>
            <div className="col-auto m-0 p-0">
              <button style={styles.reserveButton}>RESERVE A TABLE</button>
            </div>
            <div className="col-auto p-0 m-0">
              <div
                style={styles.topRightInfo}
                className="row d-flex flex-column align-items-center py-1 px-2 m-0"
              >
                <h4>Now Opened</h4>
                <h4>From 12:00 - To 15:30</h4>
              </div>
              <div style={styles.bottomRightInfo} className="row py-1 m-0">
                <h3>Click for Opening Hours</h3>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <h1>content</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
