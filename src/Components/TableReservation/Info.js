import GoogleMap from "Components/Common/GoogleMap";
import * as React from "react";
import "./Info.css";
import { Typography } from "@material-ui/core";
import { useUserContext } from "Context/userContext";
import Testimonial from "Components/Body/testimonial";
import Stepper from "./ReservationFlow/Stepper/Stepper";
import PeopleStep from "./ReservationFlow/Steps/PeopleStep";
import DateStep from "./ReservationFlow/Steps/DateStep";
import TimeStep from "./ReservationFlow/Steps/TimeStep";
import DiscountStep from "./ReservationFlow/Steps/DiscountStep";
import { getReservationOffers } from "api/Public";
import { Skeleton } from "@material-ui/lab";

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
  reservingContainer: {
    position: "relative",
  },
  reservingNextBtn: {
    position: "absolute",
    top: "5px",
    right: "0px",
    borderRadius: "10px 0px 0px 10px",
    fontSize: "16px",
    padding: "5px 10px",
    backgroundColor: "#b29051",
    color: "white",
  },
  reservingNextBtnDisabled: {
    position: "absolute",
    top: "5px",
    right: "0px",
    borderRadius: "10px 0px 0px 10px",
    fontSize: "16px",
    padding: "5px 10px",
    border: "2px solid #b29051",
    backgroundColor: "#272727",
    color: "#b29051",
    opacity: 0.5,
  },
  skeletonSpacing: {
    margin: "15px 20px 0",
    borderRadius: "30px",
    backgroundColor: "rgb(178, 144, 81)",
  },
});

export default function Info({ placeData }) {
  const styles = useStyle();
  const { restaurant } = useUserContext();
  const [loading, setLoading] = React.useState(false);
  const [reserving, setReserving] = React.useState(false);
  const [isNextBtnDisabled, setIsNextBtnDisabled] = React.useState(true);
  const [activeStep, setActiveStep] = React.useState(0);
  const [parameters, setParameters] = React.useState({});
  const [offers, setOffers] = React.useState([]);
  const [reservationDetail, setReservationDetail] = React.useState({
    choosePeople: {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
      10: [],
      11: [],
      12: [],
      13: [],
      14: [],
      15: [],
      16: [],
    },
  });

  React.useEffect(() => {
    setLoading(true);
    try {
      (async function () {
        const res = await getReservationOffers();
        setOffers(res?.data?.data);
        setLoading(false);
      })();
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    if (parameters?.people !== undefined && activeStep === 0)
      setIsNextBtnDisabled(false);
    else if (parameters?.date !== undefined && activeStep === 1)
      setIsNextBtnDisabled(false);
    else if (parameters?.time !== undefined && activeStep === 2)
      setIsNextBtnDisabled(false);
    else if (parameters?.discount !== undefined && activeStep === 3)
      setIsNextBtnDisabled(false);
  }, [parameters, isNextBtnDisabled, activeStep]);

  function incrementActive() {
    if (activeStep < 3) setActiveStep(activeStep + 1);
    // go for next procedure
    else {
    }
  }

  function getStep(active) {
    switch (active) {
      case 0:
        return (
          <PeopleStep
            offers={offers}
            reservationDetail={reservationDetail}
            setReservationDetail={setReservationDetail}
            parameters={parameters}
            setParameters={setParameters}
          />
        );
      case 1:
        return (
          <DateStep
            offers={offers}
            parameters={parameters}
            setParameters={setParameters}
            reservationDetail={reservationDetail}
            setReservationDetail={setReservationDetail}
          />
        );
      case 2:
        return (
          <TimeStep
            offers={offers}
            parameters={parameters}
            setParameters={setParameters}
            detail={reservationDetail}
            setDetail={setReservationDetail}
          />
        );
      case 3:
        return (
          <DiscountStep
            offers={offers}
            parameters={parameters}
            setParameters={setParameters}
          />
        );
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <div style={styles.reserveTableRoot}>
          <div style={styles.reserveIconContainer}>
            <img style={styles.reserveIcon} src="assets/reservation-icon.png" />
          </div>
          <div style={styles.reserveBtn}>
            {reserving ? (
              <button style={styles.reserveButton}>
                YOU'RE RESERVING A TABLE!
              </button>
            ) : (
              <button
                style={styles.reserveButton}
                onClick={() => setReserving(true)}
              >
                RESERVE A TABLE
              </button>
            )}
          </div>
        </div>
        {reserving ? (
          <div>
            <Stepper active={activeStep} setActive={setActiveStep} />
            {loading ? (
              <Skeleton
                variant="rect"
                height={350}
                style={styles.skeletonSpacing}
              />
            ) : (
              <div style={styles.reservingContainer}>
                {activeStep !== 3 && (
                  <button
                    className="shadow-md"
                    style={
                      isNextBtnDisabled
                        ? styles.reservingNextBtnDisabled
                        : styles.reservingNextBtn
                    }
                    onClick={() => {
                      incrementActive();
                      setIsNextBtnDisabled(true);
                    }}
                    disabled={isNextBtnDisabled}
                  >
                    Next
                  </button>
                )}
                {getStep(activeStep)}
              </div>
            )}
          </div>
        ) : (
          <div style={styles.resreveTable}>
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
        )}
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
