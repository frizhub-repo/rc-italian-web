import React from "react";
import { Avatar, Grid, Menu, MenuItem } from "@material-ui/core";
import { useUserContext } from "../../Context/userContext";
import { useHistory } from "react-router";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import { Box, Divider } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Header({ setActiveTab, logout }) {
  const { restaurant, customer } = useUserContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    if (window.location.pathname === "/complete/purchase") {
      history.push("/profile");
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="text-gray-700 body-font ">
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundImage:
            "url(" +
            "https://static.wixstatic.com/media/78f342_adb0386ab6c24378a548b4b3c43c491a~mv2.jpg/v1/fill/w_560,h_372,al_c,q_80,usm_0.66_1.00_0.01/Black%20board%20for%20website.webp" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid
          lg={8}
          className={`flex w-full  justify-content-between`}
          style={{
            // backgroundColor: "teal",
            padding: "25px 28px",
            // background: `url(${profileAvatar})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="w-25" style={{ display: "flex" }}>
            <Box
              style={{
                width: "56px",
                height: "55px",
                borderRadius: "50px",
                display: "flex",
                opacity: "0.9",
                background: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <RestaurantMenuIcon
                style={{ color: "black", fontSize: "42px", cursor: "pointer" }}
                onClick={() => history.push("/")}
                src={`${process.env.REACT_APP_API_BASE_URL}/${restaurant?.restaurant?.logoUrl}`}
              />
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "white",
                alignItems: "flex-start",
              }}
            >
              <label
                style={{
                  marginBottom: "0px",
                  marginLeft: "7px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                RESTO LOGO
              </label>
              <label
                style={{
                  marginBottom: "0px",
                  marginLeft: "20px",
                  fontSize: "12.5px",
                  opacity: "0.9",
                }}
              >
                Restaurant Shop
              </label>
            </Box>
            {/* <img
            style={{ height: "50px" }}
            alt="restaurant logo"
            onClick={() => history.push("/")}
            src={`${process.env.REACT_APP_API_BASE_URL}/${restaurant?.restaurant?.logoUrl}`}
            className="object-cover cursor-pointer"
          /> */}
          </div>
          <div className="d-flex align-items-center justify-content-end cursor-pointer">
            <ShoppingCartIcon
              style={{
                marginRight: "13px",
                marginBottom: "6px",
                fontSize: "22px",
                color: "white",
              }}
            />
            <p style={{ margin: "0px 9px 5px 0px", color: "white" }}>
              {/* {customer?.firstName} {customer?.lastName}{" "} */}
              Name
            </p>
            <Avatar
              onClick={handleClick}
              alt="Cindy Baker"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            />
          </div>
        </Grid>
      </Box>
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
            setActiveTab(0);
          }}
        >
          My Account
        </MenuItem>
        <MenuItem
          dense={true}
          onClick={() => {
            handleClose();
            setActiveTab(1);
          }}
        >
          Delivery Address
        </MenuItem>
        <MenuItem
          dense={true}
          onClick={() => {
            handleClose();
            setActiveTab(2);
          }}
        >
          Orders
        </MenuItem>
        <MenuItem
          dense={true}
          onClick={() => {
            handleClose();
            setActiveTab(3);
          }}
        >
          Payment Method
        </MenuItem>
        <MenuItem
          dense={true}
          onClick={() => {
            handleClose();
            setActiveTab(4);
          }}
        >
          Contact Method
        </MenuItem>
        <MenuItem
          dense={true}
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </header>
  );
}
