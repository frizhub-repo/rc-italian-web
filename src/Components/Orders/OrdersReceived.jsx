import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Card, Divider, Grid, Paper } from "@material-ui/core";
import Header from "../Account/Header";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "25px 40px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "25px 12px",
      width: "100%",
    },
  },
  heading: {
    display: "flex",
    fontSize: "1.15rem",
    fontWeight: "700",
    // fontFamily:"roboto"
  },
  cardCtn: {
    padding: "20px",
    background: "#F4F4F4",
    // border:"1px solid #EAEAEA"
  },
  cardCtn1: {
    padding: "20px",
    border: "1px solid #EAEAEA",
  },
  imgCardCtn: {
    padding: "15px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  orderSummaryCtn: {
    paddingLeft: "15px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
      paddingTop: "25px",
    },
  },
  button1: {
    display: "flex",
    alignItems: "center",
    height: "fit-content",
    outline: "none",
    margin: "1em 0em",
    padding: "0.25em 2em 0.25em 1em",
    textAlign: "left",
    fontSize: "11px",
    fontWeight: "500",
    background:
      " linear-gradient(-120deg, transparent 1em, #FFF 1.05em , #FFF 1.5em, transparent 1.45em, transparent 2em, #DCDCDC 2.05em) top no-repeat, linear-gradient(300deg, transparent 1em, #FFF 1.05em , #FFF 1.5em, transparent 1.45em, transparent 2em, #DCDCDC 2.05em) bottom no-repeat",
    backgroundSize: "117% 50%",
    color: "black",
  },
  buttonIcon: {
    width: "30px",
    height: "30px",
    marginRight: "10px",
    display: "flex",
    justifyContent: "center",
    borderRadius: "20px",
    background: "white",
    alignItems: "center",
    color: "black",
  },
  backBtn: {
    background: "#3f3f3f",
    fontSize: "10px",
    textTransform: "none",
    color: "white",
    width: "140px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "space-around",

    "&:hover": {
      backgroundColor: "#3f3f3f",
    },
    "&:focus": {
      outline: "none",
    },
  },
}));

const OrdersReceived = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div
        style={{
          marginTop: "68px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button className={classes.button1}>
          <div className={classes.buttonIcon}>
            <FastfoodIcon style={{ fontSize: "19px" }} />
          </div>
          Order Received
        </button>
        <button className={classes.button1}>
          <div className={classes.buttonIcon}>
            <MobileFriendlyIcon style={{ fontSize: "19px" }} />
          </div>
          Order Confirmed
        </button>
        <button className={classes.button1}>
          <div className={classes.buttonIcon}>
            <DirectionsBikeIcon style={{ fontSize: "19px" }} />
          </div>
          Rider On the way
        </button>
        <button className={classes.button1}>
          <div className={classes.buttonIcon}>
            <FastfoodIcon style={{ fontSize: "19px" }} />
          </div>
          Enjoy Your Meal
        </button>
      </div>
      <Grid item container>
        <Grid lg={2}></Grid>
        <Grid sm={12} lg={8} className={classes.container}>
          <Grid lg={8}>
            <label className={classes.heading}>Order Detail</label>
            <Paper className={classes.cardCtn} elevation={0}>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  fontWeight: "700",
                  lineHeight: "22px",
                  marginBottom: "10px",
                }}
              >
                <label style={{ color: "#CCA87D", fontSize: "2rem" }}>
                  20:30
                </label>
                <label>you requested delivery for</label>
              </Box>

              <Card className={classes.imgCardCtn}>
                <img
                  height="210"
                  width="210"
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FmZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                />
                <div style={{ textAlign: "start", marginLeft: "20px" }}>
                  <label style={{ fontWeight: "700" }}>Starters Cafe</label>
                  <div
                    style={{
                      lineHeight: "13px",
                      fontSize: "14px",
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "7px",
                      color: "#828180",
                    }}
                  >
                    <label>North Fork Table & Inn</label>
                    <label>57225 Main Rd, Southold, Ny</label>
                    <label>11971</label>
                    <label>info@north.com</label>
                    <label>(917) 555-1234</label>
                  </div>
                </div>
              </Card>

              <Card
                style={{
                  padding: "15px",
                  textAlign: "start",
                  marginTop: "10px",
                }}
              >
                <label style={{ fontWeight: "700" }}>Delivery Address</label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "12px",
                    lineHeight: "10px",
                  }}
                >
                  <label>North Fork Table & Inn 57225 Main Rd.</label>
                  <label>Southold, NY 119717</label>
                  <label>Fried Brussels + Apple</label>
                </div>
              </Card>

              <Card
                style={{
                  padding: "15px",
                  textAlign: "start",
                  marginTop: "10px",
                }}
              >
                <label style={{ fontWeight: "700" }}>Your Message</label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "12px",
                    lineHeight: "10px",
                  }}
                >
                  <label>North Fork Table & Inn 57225 Main Rd.</label>
                  <label>Southold, NY 119717</label>
                  <label>Fried Brussels + Apple</label>
                </div>
              </Card>
            </Paper>

            <div
              style={{
                marginTop: "18px",
                padding: "10px",
                width: "100%",
                border: "1px solid #EAEAEA",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box style={{ display: "flex", alignItems: "center" }}>
                <label
                  style={{
                    fontSize: "13px",
                    fontWeight: "400",
                    margin: "0px 4px 0px 0px",
                  }}
                >
                  Share It:
                </label>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
              </Box>
              <Button className={classes.backBtn}>
                <ArrowBackIcon style={{ fontSize: "15px" }} />
                Back to Home
              </Button>
            </div>
          </Grid>

          <Grid lg={4} className={classes.orderSummaryCtn}>
            <label className={classes.heading}>Order Summary</label>
            <Paper className={classes.cardCtn1} elevation={0}>
              <label
                style={{ fontSize: "11px", display: "flex", opacity: "0.8" }}
              >
                Total Cost
              </label>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label
                  style={{
                    color: "#CCA87D",
                    fontWeight: "700",
                    fontSize: "1.2rem",
                  }}
                >
                  €230
                </label>
                <div>
                  <ShoppingBasketIcon htmlColor="#656565" />
                </div>
              </div>
              <Divider />
              <label
                style={{
                  fontSize: "10px",
                  fontWeight: "400",
                  display: "flex",
                  marginTop: "0.75rem",
                }}
              >
                € 23.0 to reach the minimum order
              </label>
              <label
                style={{
                  fontWeight: "800",
                  fontSize: "0.75rem",
                  display: "flex",
                  marginTop: "10px",
                }}
              >
                Home Delivery € 23.0
              </label>
              <div
                style={{
                  padding: "10px",
                  border: "1px solid #EAEAEA",
                  fontSize: "10px",
                }}
              >
                {[1, 2].map((item, i) => (
                  <>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <label>3x</label>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            marginLeft: "8px",
                          }}
                        >
                          <label style={{ marginBottom: "0px" }}>
                            Fried Brussels + Apple
                          </label>
                          <label style={{ marginBottom: "0px" }}>
                            Made for lunch
                          </label>
                          <label>deliver it quickly</label>
                          <Box style={{ display: "flex", marginBotom: "10px" }}>
                            <div style={{ cursor: "pointer" }}>Edit</div>
                            <div
                              style={{ marginLeft: "11px", cursor: "pointer" }}
                            >
                              Remove
                            </div>
                          </Box>
                        </div>
                      </div>
                      <label>€ 23.0</label>
                    </Box>
                    {i !== [1, 2].length - 1 ? (
                      <Divider style={{ margin: "10px 0px" }} />
                    ) : null}
                  </>
                ))}
              </div>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "11px",
                  fontWeight: "500",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <label>Sub Total</label>
                  <label>Delivery Cost</label>
                  <label>Total</label>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label>€ 23.0</label>
                  <label>€ .0</label>
                  <label>€ 45.50</label>
                </div>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid lg={2}></Grid>
      </Grid>
      <Box
        style={{
          width: "100%",
          height: "90px",
          background: "rgb(72 72 72)",
          display: "flex",
          justifyContent: "center",
          margin: "30px 0px",
        }}
      >
        <Grid
          lg={8}
          style={{
            padding: "0px, 40px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                alignSelf: "center",
                color: "white",
                margin: "16px 8px 0px 0px",
                lineHeight: "19px",
              }}
            >
              <label style={{ fontWeight: "600", fontSize: "18px" }}>
                Do you need Help?
              </label>
              <label style={{ fontSize: "14px", opacity: "0.8" }}>
                Call the restaurant at
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <WhatsAppIcon style={{ fontSize: "50px", color: "#CCA87D" }} />
              <label
                style={{
                  marginBottom: "0px",
                  fontSize: "30px",
                  color: "#CCA87D",
                  fontWeight: "600",
                }}
              >
                +85-486567854
              </label>
            </div>
          </Box>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              disableRipple
              style={{
                background: "#FFFFFC",
                borderRadius: "25px",
                height: "36px",
                width: "212px",
                textTransform: "none",
                fontSize: "11px",
                outline: "none",
              }}
            >
              Check our Dedicated Session
            </Button>
          </div>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default OrdersReceived;
