import { Grid } from "@material-ui/core";
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

export default function Profile() {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="OverRide">
      <Header />
      <div
        className="container"
        style={{ marginTop: "40px", padding: "30px 35px 0px" }}
      >
        <Grid container>
          <Grid
            container
            direction="column"
            justify="flex-start"
            // spacing={4}
            style={{
              backgroundColor: "black",
              color: "white",
            }}
            md={3}
          >
            <Grid
              item
              style={{ margin: "25px 0px 0px 20px" }}
              onClick={() => setActiveTab(0)}
            >
              <AccountCircleIcon /> My Account
            </Grid>
            <Grid
              item
              style={{ margin: "25px 0px 0px 20px" }}
              onClick={() => setActiveTab(1)}
            >
              <AirportShuttleIcon /> Delivery Address
            </Grid>
            <Grid
              item
              style={{ margin: "25px 0px 0px 20px" }}
              onClick={() => setActiveTab(2)}
            >
              <ShoppingCartIcon /> Orders
            </Grid>
            <Grid
              item
              style={{ margin: "25px 0px 0px 20px" }}
              onClick={() => setActiveTab(3)}
            >
              <PaymentIcon /> Payment Method
            </Grid>
            <Grid
              item
              style={{ margin: "25px 0px 0px 20px" }}
              onClick={() => setActiveTab(4)}
            >
              <HeadsetIcon /> Contact Method
            </Grid>
            <Grid
              item
              style={{ margin: "25px 0px 25px 20px" }}
              onClick={() => setActiveTab(5)}
            >
              <ExitToAppIcon /> Logout
            </Grid>
          </Grid>
          <Grid container md={9} style={{ paddingLeft: "25px" }}>
            <Grid
              container
              direction="column"
              style={{ backgroundColor: "#F2F2F2", padding: "25px" }}
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
              <Grid item>asdas</Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
