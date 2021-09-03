import React from "react";

const useStyle = () => ({
  container: {
    background: "#272727",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "white",
  },
  logoStyle: {
    width: "90%",
  },
  statusStyle: {
    color: "#B29051",
  },
});

export default function Status({ placeData }) {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <div className="d-none d-lg-block">
        <img style={styles.logoStyle} src="assets/status-logo.png" />
      </div>
      <div className="d-flex flex-column align-items-center">
        <h3>THE RESTAURANT GAINED A REPUTATION OF</h3>
        <div className="d-flex my-3 align-items-center">
          <img className="mr-5" src="assets/like.png" />
          <h5>
            <span style={styles.statusStyle}>{placeData?.rating}</span>|5
          </h5>
        </div>
        <div className="d-flex align-items-center">
          <h5>WITH</h5>
          <img className="mx-4" src="assets/chat.png" />
          <h5>
            <span style={styles.statusStyle}>
              {placeData?.user_ratings_total}
            </span>{" "}
            REVIEWS
          </h5>
        </div>
      </div>
    </div>
  );
}
