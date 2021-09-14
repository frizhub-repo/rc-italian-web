import React from "react";
import AuthModal from "../Auth/authModal";
import { useUserContext } from "../../Context/userContext";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Badge, Menu, MenuItem } from "@material-ui/core";
import classes from "./Navbar.module.css";
import { useOrderContext } from "Context/OrderContext";
import shopingBag from "images/shopingBag.png";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const location = useLocation();
  let { token, setToken, customer, restaurant } = useUserContext();
  const { pendingOrders } = useOrderContext();

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const showProfile = () => history.push("/profile");

  React.useEffect(() => {
    setToken(localStorage.getItem("token"));
  });

  const handleMenuItemClick = (orderId) => {
    setAnchorEl1(null);
    history.push(`/ordersreceived/${orderId}`);
  };

  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const handleClickListItem = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg navbar-dark ${classes.navRoot}`}
    >
      <div className="container-fluid">
        <Link className={classes.logo} to="/">
          <img
            width="40"
            src={
              process.env.REACT_APP_API_BASE_URL +
              "/" +
              restaurant?.restaurant?.logoUrl
            }
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link hoverNavBar ${location.pathname === "/" && "activeNavbar"
                  }`}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/menu"
                className={`nav-link hoverNavBar ${location.pathname === "/menu" && "activeNavbar"
                  }`}
              >
                MENU
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/tableReservation"
                className={`nav-link hoverNavBar ${location.pathname === "/tableReservation" && "activeNavbar"
                  }`}
              >
                TABLE RESERVATION
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/delivery"
                className={`nav-link hoverNavBar ${location.pathname === "/delivery" && "activeNavbar"
                  }`}
              >
                DELIVERY
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link hoverNavBar ${location.pathname === "/contact" && "activeNavbar"
                  }`}
              >
                CONTACT
              </Link>
            </li>
          </ul>
          <button
            className={`d-flex btn btn-lg btn-outline-light btn-rounded ${classes.actionBtn}`}
          >
            {token ? (
              <span onClick={showProfile}>
                {customer?.firstName} {customer?.lastName}
              </span>
            ) : (
              <span onClick={() => history.push('signIn')} className="d-flex">
                <img
                  src="assets/login.png"
                  width="20"
                  className={classes.authImg}
                />
                Sign In/Sign Up
              </span>
            )}
          </button>
          <AuthModal open={open} handleClose={handleClose} />
        </div>
      </div>
      {pendingOrders?.length > 0 && (
        <>
          <Badge
            className={classes.trackOrderRoot}
            badgeContent={pendingOrders?.length}
            color="secondary"
            onClick={handleClickListItem}
          >
            <img src={shopingBag} className={classes.shopingBag} />
            <span>My Orders</span>
          </Badge>
          <Menu
            style={{ border: "1px solid #d3d4d5" }}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            id="lock-menu"
            anchorEl={anchorEl1}
            keepMounted
            open={Boolean(anchorEl1)}
            onClose={handleClose1}
          >
            {pendingOrders.map((order, index) => (
              <MenuItem
                key={order?._id}
                onClick={() => handleMenuItemClick(order?._id)}
                className={classes.menuItemRoot}
              >
                <div>
                  <span className={classes.orderId}>{order?.orderId}</span>{" "}
                  &nbsp;{" "}
                  <span
                    className={`${classes.statusRoot} ${order?.status === "pending"
                        ? classes.pending
                        : order?.status === "accepted"
                          ? classes.accepted
                          : order?.status === "assigned" ||
                            order?.status === "pickedUp"
                            ? classes.assigned
                            : classes.requested
                      }`}
                  >
                    {order?.status}
                  </span>
                </div>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </nav>
  );
}

export default Navbar;
