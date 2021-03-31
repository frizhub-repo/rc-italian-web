import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import profileAvatar from "../../images/bgimg.jpg";
import PaymentIcon from "@material-ui/icons/Payment";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HeadsetIcon from "@material-ui/icons/Headset";
import Header from "./Header";
import Divider from "@material-ui/core/Divider";
import Order from "./Order";
import MyAccount from "./MyAccount";
import DeliveryAddress from "./DeliveryAddress";
import PaymentMethod from "./PaymentMethod";
import ContactMethod from "./ContactMethod";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "40px",
    padding: "30px 35px 0px",
  },
  leftSideBar: {
    backgroundColor: "#1D1D1D",
    color: "white",
    height: "fit-content",
  },
  spacing: {
    margin: "25px 0px 0px 25px",
    cursor: "pointer",
  },
  activeColor: {
    color: "#B39872",
  },
  logout: {
    margin: "25px 0px 25px 25px",
    cursor: "pointer",
  },
  content: {
    paddingLeft: "25px",
    height: "fit-content",
  },
  nestedContent: {
    backgroundColor: "#F2F2F2",
    padding: "25px",
  },
}));

export default function Profile() {
  const classes = useStyles();

  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="OverRide">
      <Header />
      <div className={`container ${classes.root}`}>
        <Grid container>
          <Grid
            container
            direction="column"
            justify="flex-start"
            className={classes.leftSideBar}
            md={3}
          >
            <Grid
              item
              className={`${classes.spacing} ${
                activeTab === 0 && classes.activeColor
              }`}
              onClick={() => setActiveTab(0)}
            >
              <AccountCircleIcon /> My Account
            </Grid>
            <Grid
              item
              className={`${classes.spacing} ${
                activeTab === 1 && classes.activeColor
              }`}
              onClick={() => setActiveTab(1)}
            >
              <AirportShuttleIcon /> Delivery Address
            </Grid>
            <Grid
              item
              className={`${classes.spacing} ${
                activeTab === 2 && classes.activeColor
              }`}
              onClick={() => setActiveTab(2)}
            >
              <ShoppingCartIcon /> Orders
            </Grid>
            <Grid
              item
              className={`${classes.spacing} ${
                activeTab === 3 && classes.activeColor
              }`}
              onClick={() => setActiveTab(3)}
            >
              <PaymentIcon /> Payment Method
            </Grid>
            <Grid
              item
              className={`${classes.spacing} ${
                activeTab === 4 && classes.activeColor
              }`}
              onClick={() => setActiveTab(4)}
            >
              <HeadsetIcon /> Contact Method
            </Grid>
            <Grid
              item
              className={`${classes.logout} ${
                activeTab === 5 && classes.activeColor
              }`}
              onClick={() => setActiveTab(5)}
            >
              <ExitToAppIcon /> Logout
            </Grid>
          </Grid>
          <Grid container md={9} className={classes.content}>
            <Grid
              container
              direction="column"
              className={classes.nestedContent}
            >
              {activeTab === 0 && (
                <Grid item>
                  <MyAccount />
                </Grid>
              )}
              {activeTab === 1 && (
                <Grid item>
                  <DeliveryAddress />
                </Grid>
              )}
              {activeTab === 2 && (
                <Grid item>
                  <Order />
                </Grid>
              )}
              {activeTab === 3 && (
                <Grid item>
                  <PaymentMethod />
                </Grid>
              )}
              {activeTab === 4 && (
                <Grid item>
                  <ContactMethod />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
