import React from "react";
import AuthModal from "../Auth/authModal";
import { useUserContext } from "../../Context/userContext";
import { Link, useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  let { token, setToken, customer } = useUserContext();

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const showProfile = () => history.push("/profile");

  React.useEffect(() => {
    setToken(localStorage.getItem("token"));
  });

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-dark"
      style={{ background: "#B29051" }}
    >
      <div className="container-fluid">
        <Link className="btn btn-outline-light navbar-brand" to="/">
          Logo
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
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link">
                MENU
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tableReservation" className="nav-link">
                TABLE RESERVATION
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/delivery" className="nav-link">
                DELIVERY
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>
            </li>
          </ul>
          <button
            className="d-flex btn btn-lg btn-outline-light btn-rounded"
            style={{ borderRadius: "20px" }}
          >
            {token ? (
              <span onClick={showProfile}>
                {customer?.firstName} {customer?.lastName}
              </span>
            ) : (
              <span onClick={handleClickOpen} className="d-flex">
                <img
                  src="assets/login.png"
                  width="20"
                  style={{ marginRight: "5px" }}
                />
                Sign In/Sign Up
              </span>
            )}
          </button>
          <AuthModal open={open} handleClose={handleClose} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
