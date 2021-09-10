import GoogleMap from "Components/Common/GoogleMap";
import React from "react";
import "./Info.css";
import { Typography } from "@material-ui/core";
import { useUserContext } from "Context/userContext";
import Testimonial from "Components/Body/testimonial";

const useStyle = () => ({
  container: {
    padding: "5px",
    background: "#272727",
  },
  innerContainer: {
    border: "5px solid #1d1d1d",
    borderRadius: "10px",
    color: "white",
    padding: "20px",
  },
  reserveIconContainer: {
    border: "3px solid #B29051",
    borderRadius: "10px 0px 0px 10px",
    padding: "5px",
  },
  reserveIcon: {},
  reserveButton: {
    background: "white",
    border: "3px solid #B29051",
    color: "#B29051",
    width: "100%",
    height: "100%",
    borderRadius: "0 10px 10px 0",
  },
  topRightInfo: {
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
  address: {
    color: "#B29051",
  },
  statusButton: {
    background: "rgba(178, 144, 81, 0.6)",
    color: "white",
    padding: "3px 8px",
    margin: "0px 5px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closed: {
    background: "#B91010",
  },
  resreveTable: {
    display: "flex",
    flexDirection: "column",
  },
  reserveTableRoot: {
    display: "flex",
  },
  reserveBtn: {
    width: "100%",
  },
  statusStyle: {
    color: "#B29051",
  },
  reputation: {
    color: "#fff",
  },
  avatarStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#EBA73A",
    fontStyle: "italic",
    marginTop: "30px",
  },
  title2: {
    marginTop: "5px",
  },
});

export default function Info({ placeData }) {
  const styles = useStyle();
  const { restaurant } = useUserContext();

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <div style={styles.resreveTable}>
          <div style={styles.reserveTableRoot}>
            <div style={styles.reserveIconContainer}>
              <img
                style={styles.reserveIcon}
                src="assets/reservation-icon.png"
              />
            </div>
            <div style={styles.reserveBtn}>
              <button style={styles.reserveButton}>RESERVE A TABLE</button>
            </div>
          </div>
          <div>
            <div className="d-flex flex-column align-items-center justify-content-around m-0">
              <div className="d-flex justify-content-between my-3">
                <button style={styles.statusButton}>
                  <img className="mr-2" src="assets/like.png" width={30} />
                  <p className="m-0">{placeData?.rating}|5</p>
                </button>
                <button style={styles.statusButton}>
                  <img className="mr-2" src="assets/chat.png" width={30} />
                  <p className="m-0">{placeData?.user_ratings_total}</p>
                </button>
                <button style={styles.statusButton}>
                  <img
                    className="mr-2"
                    src="assets/active-euro.png"
                    width={30}
                  />
                  <img src="assets/passive-euro.png" width={30} />
                </button>
              </div>
              <div
                style={styles.address}
                className="d-flex flex-column align-items-center py-2"
              >
                <h5>{placeData?.formatted_address}</h5>
              </div>
            </div>
          </div>
          <div>
            <GoogleMap classname="rounded" />
          </div>
        </div>
      </div>
      <div>
        <div style={styles.avatarStyles}>
          <Typography style={styles.title} color="textSecondary" gutterBottom>
            {restaurant?.name ?? "Uncle Sammy"}
          </Typography>
          <img
            width={350}
            src={
              process.env.REACT_APP_API_BASE_URL +
              "/" +
              restaurant?.restaurant?.logoUrl
            }
          />
          <Typography
            variant="h5"
            component="h2"
            style={{ ...styles.title, ...styles.title2 }}
          >
            {restaurant?.slogan ?? "The real taste is here!"}
          </Typography>
        </div>
        <div
          className="d-flex flex-column align-items-center"
          style={styles.reputation}
        >
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
      <div>
        <Testimonial reviews={placeData?.reviews} showHeader={false} />
      </div>
    </div>
  );
}
