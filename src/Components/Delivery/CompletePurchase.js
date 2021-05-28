import { Box, Button, CircularProgress, Backdrop } from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import axiosIntance from "../../utils/axios-configured";
import Header from "../Account/Header";
import { removeOrderItems } from "../actions";
import SuccessModal from "../Common/SuccessDialog";
import Tables from "../Common/Table";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function CompletePurchase() {
  const classes = useStyles();
  const paypal = useRef();
  const disp = useDispatch();
  const history = useHistory();
  const [status, setStatus] = useState(null);
  const [show, setShow] = useState(false);
  const total = useSelector((state) => state.orders).total;
  const items = useSelector((state) => state.orders).items;
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setShow(false);

  // const createOrder = () => {
  //   if (status === "ERROR") {
  //     toast.error("Payment cancel for some reason. Please provide payment");
  //   } else if (status === "COMPLETED") {
  //     setStatus(null);
  //     axiosIntance
  //       .post("/api/v1/orders/customers", { products: items })
  //       .then((res) => {
  //         toast.success("Order created successfully");
  //         // disp(removeOrderItems());
  //         history.push("/ordersreceived");
  //         console.log(res);
  //       })
  //       .catch((err) => console.log(err));
  //   } else {
  //     toast.error("Payment not Added. Please Provide Payment");
  //   }
  // };

  useEffect(() => {
    var FUNDING_SOURCES = [
      window.paypal.FUNDING.PAYPAL,
      window.paypal.FUNDING.PAYLATER,
      window.paypal.FUNDING.CREDIT,
      window.paypal.FUNDING.CARD,
    ];

    FUNDING_SOURCES.forEach(function (fundingSource) {
      // Initialize the buttons
      var button = window.paypal.Buttons({
        style: {
          shape: "pill",
          layout: "horizontal",
          margin: "20px",
        },
        fundingSource: fundingSource,
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Restaurants Club",
                amount: {
                  value: total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          setOpen(true);
          const order = await actions.order.capture();
          if (order?.status === "COMPLETED") {
            setStatus("COMPLETED");
            axiosIntance
              .post("/api/v1/orders/customers", { products: items })
              .then((res) => {
                setOpen(false);
                toast.success("Order created successfully");
                // disp(removeOrderItems());
                history.push("/ordersreceived");
                console.log(res);
              })
              .catch((err) => {
                setOpen(false);
                console.log(err);
              });
          } else {
            setStatus("ERROR");
            setOpen(false);
            toast.error("Something went wrong");
          }
          console.log({ order });
        },
        onError: (err) => {
          setStatus("ERROR");
          setOpen(false);
          toast.error("Error occured while sending money");
          console.log({ err });
        },
        onCancel: (data) => {
          setStatus("ERROR");
          setOpen(false);
          toast.error("Payment Cancel by User");
          console.log({ data });
        },
      });

      // Check if the button is eligible
      if (button.isEligible()) {
        // Render the standalone button for that funding source
        button.render(paypal.current);
      }
    });
    // Add style on paypal buttons at run time
    let content = document.getElementsByClassName(
      "paypal-buttons-layout-horizontal"
    );
    for (let i = 0; i < content.length; i++) {
      content[i].style.margin = "5px";
      content[i].style.width = "100%";
    }
  }, []);
  return (
    <div>
      <Header />
      <Box style={{ padding: "3rem" }}>
        <Tables products={items} total={total} />
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div ref={paypal} style={{ display: "flex", width: "50%" }}></div>
      </Box>
      {/* <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
      > */}
      {/* <Grid item>
          <Typography variant="h6" gutterBottom>
            How do you want to pay?
          </Typography>
        </Grid>
        <Grid item justify="flex-end" style={{ margin: '10px 0px 10px 0px' }}>
          Total amount: ${total}
        </Grid> */}
      {/* <Grid item>
          <div ref={paypal} style={{ display: "flex", width: "55%" }}></div>
        </Grid> */}
      {/* <Grid item>
          <Button
            style={{
              borderRadius: "15px",
              backgroundColor: "black",
              color: "white",
              marginTop: "20px",
              padding: "4px 15px",
            }}
            onClick={createOrder}
          >
            Complte Purchase
          </Button>
        </Grid> */}
      {/* </Grid> */}
      <SuccessModal
        show={show}
        handleClose={handleClose}
        text={"Order created successfully"}
        title={"Order"}
      />
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
