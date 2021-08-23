import React from "react";
import AllergyAlert from "./AllergyAlert";
import Billing from "./Billing";
import OpenStatus from "./OpenStatus";
import OrderPickup from "./OrderPickup";

const useStyle = () => ({
  container: {
    background: "#272727",
    padding: "20px",
  },
  innerContainer: {
    border: "5px solid #1d1d1d",
    borderRadius: "10px",
    padding: "10px",
  },
  button: {
    width: "100%",
    padding: "10px 5px",
    borderRadius: "30px",
    cursor: "pointer",
    margin: "5px",
  },
  proceedButton: {
    background: "rgba(203, 14, 14, 0.6)",
  },
  paymentButton: {
    background: "rgba(100, 100, 100, 0.6)",
  },
});

export default function ActionBox() {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <div
        style={styles.innerContainer}
        className="row d-flex justify-content-center justify-content-md-between align-items-center"
      >
        <div className="d-none d-xl-block col-auto">
          <OpenStatus />
        </div>
        <div className="col-auto col-sm-12 col-lg-4 mb-2 px-0">
          <AllergyAlert />
          <OrderPickup />
        </div>
        <div className="col-auto pr-0">
          <Billing />
        </div>
        <div className="col-auto text-light d-flex flex-md-column align-items-center justify-content-between my-2">
          <div style={{ ...styles.button, ...styles.proceedButton }}>
            <small>
              Add more <span>5</span>€ to your <br />
              order to proceed
            </small>
          </div>
          <div style={{ ...styles.button, ...styles.paymentButton }}>
            <small>Choose a Payment method</small>
          </div>
        </div>
      </div>
    </div>
  );
}
