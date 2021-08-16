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
  reserveIconContainer: {
    border: "3px solid #B29051",
    borderRadius: "10px 0px 0px 10px",
  },
  reserveIcon: {},
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
});

export default function Info() {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <div className="row d-flex justify-content-around">
          <div className="col-md-12 col-lg-6 row d-none d-sm-flex">
            <div
              style={styles.reserveIconContainer}
              className="col-xs-6 col-sm-6 col-md-4 m-0 d-flex justify-content-center align-items-center"
            >
              <img
                style={styles.reserveIcon}
                src="assets/reservation-icon.png"
              />
            </div>
            <div className="d-none d-md-block col-md-4 m-0 p-0">
              <button style={styles.reserveButton}>RESERVE A TABLE</button>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-4 p-0 m-0 row">
              <div
                style={styles.topRightInfo}
                className="row d-flex flex-column justify-content-center align-items-center py-1 px-2 m-0"
              >
                <h5>Now Opened</h5>
                <h5>From 12:00 - To 15:30</h5>
              </div>
              <div
                style={styles.bottomRightInfo}
                className="row py-1 m-0 d-flex justify-content-center align-items-center"
              >
                <h4>Click for Opening Hours</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 d-flex justify-content-around">
            <div className="d-flex flex-column align-items-center justify-content-around m-0">
              <div className="d-flex justify-content-between my-3">
                <button style={styles.statusButton}>
                  <img className="mr-2" src="assets/like.png" width={30} />
                  <p className="m-0">4|5</p>
                </button>
                <button style={styles.statusButton}>
                  <img className="mr-2" src="assets/chat.png" width={30} />
                  <p className="m-0">427</p>
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
                className="d-flex flex-column align-items-center"
              >
                <h5>Da Ciccio</h5>
                <h5>Via Firenze 50013 Campi Bisenzio FI</h5>
              </div>
            </div>
            <div className="d-none d-xl-block">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                style={{ width: "100%", height: "20vh" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
