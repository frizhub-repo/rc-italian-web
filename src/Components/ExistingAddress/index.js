import React from "react";
import ChooseAddress from "./ChooseAddress";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Navbar from "Components/Navbar/Navbar";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "40px",
    paddingBottom: "50px",
  },
});

const DeliveryAddress = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Box className={classes.container}>
        <ChooseAddress />
      </Box>
    </div>
  );
};

export default DeliveryAddress;
