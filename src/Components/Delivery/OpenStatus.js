import React from "react";

const useStyle = () => ({
  container: {
    width: "100%",
    color: "white",
    display: "flex",
  },
  imageContainer: {
    border: "3px solid #B29051",
    borderRadius: "10px 0px 0px 10px",
  },
  infoContainer: {},
  info: {
    background: "#B29051",
    border: "3px solid #B29051",
    borderRadius: "0px 10px 0px 0px",
  },
  buttonContainer: {
    color: "black",
    background: "white",
    border: "3px solid #B29051",
    borderRadius: "0px 0px 10px 0px",
  },
});

export default function OpenStatus({ openNow }) {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <div
        style={styles.imageContainer}
        className="col-3 m-0 d-flex align-items-center justify-content-center"
      >
        <img src="assets/delivery-man.png" width={80} />
      </div>
      <div style={styles.infoContainer} className="col-9 m-0 p-0">
        <div style={styles.info}>
          <h5>{openNow ? "Now Opened" : "Now Closed - Opening:"}</h5>
          <h5>From 12:00 - To 15:30</h5>
        </div>
        <div style={styles.buttonContainer} className="py-2 m-0 ">
          <h4>Click for Opening Hours</h4>
        </div>
      </div>
    </div>
  );
}
