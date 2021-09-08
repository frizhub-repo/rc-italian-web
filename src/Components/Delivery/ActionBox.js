import AuthModal from "Components/Auth/authModal";
import { useUserContext } from "Context/userContext";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { isEmpty } from "utils/common";
import AllergyAlert from "./AllergyAlert";
import Billing from "./Billing";
import OpenStatus from "./OpenStatus";
import OrderPickup from "./OrderPickup";

const useStyle = () => ({
  container: {
    background: "#272727",
    padding: "30px 15px",
  },
  innerContainer: {
    border: "5px solid #1d1d1d",
    borderRadius: "10px",
    padding: "20px 0",
  },
  button: {
    width: "100%",
    padding: "10px 5px",
    borderRadius: "30px",
    cursor: "pointer",
  },
  proceedButton: {
    background: "rgba(203, 14, 14, 0.6)",
    marginBottom: "10px",
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const orderNow = () => {
    try {
      if (items?.items?.length <= 0) {
        throw new Error("Please provide some products to proceed");
      }
      console.log(isEmpty(customer));
      if (isEmpty(customer)) {
        handleClickOpen();
      } else if (customer?.addresses?.length) {
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
      <div style={styles.innerContainer} className="">
        <div>
          <OpenStatus openNow={openNow} />
        </div>
        <div>
          <AllergyAlert />
          <OrderPickup />
        </div>
        <div>
          <Billing items={items} />
        </div>
        <div className="text-light mt-4">
          <div style={{ ...styles.button, ...styles.proceedButton }}>
            Add more 5€ to your order to proceed
          </div>
          <div
            onClick={orderNow}
            style={{ ...styles.button, ...styles.paymentButton }}
          >
            <small>Choose a Payment method</small>
          </div>
        </div>
      </div>
      <AuthModal open={open} handleClose={handleClose} />
    </div>
  );
}
