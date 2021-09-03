import { useUserContext } from "Context/userContext";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import AllergyAlert from "./AllergyAlert";
import Billing from "./Billing";
import OpenStatus from "./OpenStatus";
import OrderPickup from "./OrderPickup";

const useStyle = () => ({
  container: {
    background: "#272727",
    padding: "20px 30px",
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

export default function ActionBox({ openNow }) {
  const styles = useStyle();
  const items = useSelector((state) => state.orders);
  const { customer } = useUserContext();
  const history = useHistory();

  const orderNow = () => {
    try {
      if (items?.items?.length <= 0) {
        throw new Error("Please provide some products to proceed");
      }
      if (customer?.addresses?.length) {
        history.push("/chooseAddress");
      } else {
        history.push("/deliveryAddress");
      }
    } catch (error) {
      if (error.message) {
        toast.error(error.message);
        return;
      }
      toast.error("Error occured");
    }
  };

  return (
    <div style={styles.container}>
      <div
        style={styles.innerContainer}
        className="row d-flex justify-content-center justify-content-md-between align-items-center"
      >
        <div className="d-none d-xl-block col-auto">
          <OpenStatus openNow={openNow} />
        </div>
        <div className="col-auto col-sm-12 col-lg-4 mb-2">
          <AllergyAlert />
          <OrderPickup />
        </div>
        <div className="col-auto pr-0">
          <Billing items={items} />
        </div>
        <div className="col-auto text-light d-flex flex-md-column align-items-center justify-content-between my-2">
          <div style={{ ...styles.button, ...styles.proceedButton }}>
            <small>
              Add more <span>5</span>€ to your <br />
              order to proceed
            </small>
          </div>
          <div
            onClick={orderNow}
            style={{ ...styles.button, ...styles.paymentButton }}
          >
            <small>Choose a Payment method</small>
          </div>
        </div>
      </div>
    </div>
  );
}
