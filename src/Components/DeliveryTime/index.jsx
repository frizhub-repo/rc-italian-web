import React from "react";
import DeliveryTime from "./DeliveryTime";
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

const Index = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Box className={classes.container}>
        <DeliveryTime />
      </Box>
    </div>
  );
};

export default Index;
