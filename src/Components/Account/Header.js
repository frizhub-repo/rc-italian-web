import React from "react";
import { Avatar, Menu, MenuItem } from "@material-ui/core";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjtYqae1-TmkCUBgvcnb_w1yS1RQgvx27DLg&usqp=CAU"
            className="object-cover"
          />
        </div>
        <div className="d-flex align-items-center justify-content-end">
          <p style={{ margin: "0px 9px 5px 0px", color: "white" }}>Muhammad </p>
          <Avatar
            alt="Cindy Baker"
            onClick={handleClick}
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
        <MenuItem dense={true} onClick={handleClose}>
          My Account
        </MenuItem>
        <MenuItem dense={true} onClick={handleClose}>
          Delivery Address
        </MenuItem>
        <MenuItem dense={true} onClick={handleClose}>
          Orders
        </MenuItem>
        <MenuItem dense={true} onClick={handleClose}>
          Payment Method
        </MenuItem>
        <MenuItem dense={true} onClick={handleClose}>
          Contact Method
        </MenuItem>
        <MenuItem dense={true} onClick={handleClose}>
          Logout
        </MenuItem>
      </Menu>
    </header>
  );
}
