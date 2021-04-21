import {
  Avatar,
  Box,
  Grid,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";
import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PaymentIcon from "@material-ui/icons/Payment";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HeadsetIcon from "@material-ui/icons/Headset";
import TodayIcon from "@material-ui/icons/Today";
import MyAccount from "./MyAccount";
import Order from "./Order";
import PaymentMethod from "./PaymentMethod";
import MyReservation from "./MyReservations";
import ContactMethod from "./ContactMethod";
import DeliveryAddress from "./DeliveryAddress";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "96px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url('https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/restaurant%2F110946%2Frestaurant120181012055658.jpeg')`,
  },
  middle: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
  },
  imgRoot: {
    display: "flex",
    alignItems: "center",
  },
  img: {
    height: "70px",
  },
  avatartRoot: {
    display: "flex",
    alignItems: "center",
  },
  name: {
    margin: "0px 9px 5px 0px",
    fontSize: "1.2rem",
    fontWeight: "500",
    color: "black",
  },
  root2: {
    marginTop: "25px",
  },
  activeColor: {
    color: "#B39872",
  },
  spacing: {
      cursor: 'pointer',
      "&:hover": {
          color: '#B39872'
      }
  },
  hide: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  profil: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: '15px',
      marginRight: '15px'
    }
  }
}));

export default function Custom() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={`OverRide`}>
      <Grid container className={classes.root}>
        <Grid item md={3} className={classes.hide}></Grid>
        <Grid item md={6} sm={12} xs={12} className={classes.profil}>
          <div className={classes.middle}>
            <div className={classes.imgRoot}>
              <img
                className={classes.img}
                alt="logo"
                src="https://cdn.dribbble.com/users/595119/screenshots/1971790/attachments/343766/Resto_Logo_Preview_%28Dribbble%29_800x600px_A.png?compress=1&resize=400x300"
              />
            </div>
            <div className={classes.avatartRoot}>
              <div
                className="d-flex align-items-center justify-content-end cursor-pointer"
                onClick={handleClick}
              >
                <p className={classes.name}>Nauman malik</p>
                <Avatar
                  alt="Cindy Baker"
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={3} className={classes.hide}></Grid>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <MenuItem
            dense={true}
            onClick={() => {
              handleClose();
            }}
          >
            My Account
          </MenuItem>
          <MenuItem
            dense={true}
            onClick={() => {
              handleClose();
            }}
          >
            Delivery Address
          </MenuItem>
          <MenuItem
            dense={true}
            onClick={() => {
              handleClose();
            }}
          >
            Orders
          </MenuItem>
          <MenuItem
            dense={true}
            onClick={() => {
              handleClose();
            }}
          >
            Payment Method
          </MenuItem>
          <MenuItem
            dense={true}
            onClick={() => {
              handleClose();
            }}
          >
            Contact Method
          </MenuItem>
          <MenuItem
            dense={true}
            onClick={() => {
              handleClose();
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Grid>

      <Grid container className={classes.root2}>
        <Grid item md={12} lg={12}>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "250px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: "40px",
                  padding: "20px",
                  height: "450px",
                }}
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
                  <TodayIcon /> Table Reservation
                </Grid>
                <Grid
                  item
                  className={`${classes.spacing} ${
                    activeTab === 4 && classes.activeColor
                  }`}
                  onClick={() => setActiveTab(4)}
                >
                  <PaymentIcon /> Payment Method
                </Grid>
                <Grid
                  item
                  className={`${classes.spacing} ${
                    activeTab === 5 && classes.activeColor
                  }`}
                  onClick={() => setActiveTab(5)}
                >
                  <HeadsetIcon /> Contact Method
                </Grid>
                <Grid item className={classes.spacing}>
                  <ExitToAppIcon /> Logout
                </Grid>
              </div>
            </div>
            <div
              style={{
                width: "600px",
                backgroundColor: "#F2F2F2",
                marginLeft: "20px",
                padding: '25px'
              }}
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
              {activeTab === 4 && (
                <Grid item>
                  <PaymentMethod />
                </Grid>
              )}
              {activeTab === 3 && (
                <Grid item>
                  <MyReservation />
                </Grid>
              )}
              {activeTab === 5 && (
                <Grid item>
                  <ContactMethod />
                </Grid>
              )}
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
