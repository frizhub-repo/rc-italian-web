import React from "react";
import { Avatar, Menu, MenuItem } from "@material-ui/core";
import { useUserContext } from "../../Context/userContext";
import { useHistory } from "react-router";

export default function Header({ setActiveTab }) {
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
      <div
        className={`flex w-full  justify-content-between px-44 py-4`}
        style={{
          backgroundColor: "teal",
          // background: `url(${profileAvatar})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-25">
          <img
            style={{ height: "50px" }}
            alt="restaurant logo"
            src={`${process.env.REACT_APP_API_BASE_URL}/${restaurant?.restaurant?.logoUrl}`}
            className="object-cover"
          />
        </div>
        <div
          className="d-flex align-items-center justify-content-end cursor-pointer"
          onClick={handleClick}
        >
          <p style={{ margin: "0px 9px 5px 0px", color: "white" }}>
            {customer?.firstName} {customer?.lastName}{" "}
          </p>
          <Avatar
            alt="Cindy Baker"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          />
        </div>
      </div>
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
        <MenuItem dense={true} onClick={handleClose}>
          Logout
        </MenuItem>
      </Menu>
    </header>
  );
}
