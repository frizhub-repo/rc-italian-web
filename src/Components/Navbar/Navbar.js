import React from "react";
import AuthModal from "../Auth/authModal";
import { useUserContext } from "../../Context/userContext";
import { Link, useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";

function Navbar() {
  const [modalShow, setModalShow] = React.useState(false);
  const history = useHistory();
  let { token, setToken } = useUserContext();
  
  React.useEffect(() => {
    setToken(localStorage.getItem("token"));
  });
  
  return (
    <header className="text-gray-700 body-font w-full ">
      <div className=" mx-auto flex   justify-content-center w-full">
        <div
          className="md:ml-auto md:mr-auto flex w-full    justify-center"
          style={{  alignItems: "center" }}
        >
          <Link to="/" className="mr-5 text-white text-xs">
            HOME
          </Link>
          <Link to="/menu/1" className="mr-5 text-white text-xs">
            MENU
          </Link>
          <Link to="/order" className="mr-5 text-white text-xs">
            Order
          </Link>
          <Link to="/tableReservation" className="mr-5 text-white text-xs">
            TABLE RESERVATION
          </Link>
          <Link to="contact" className="text-white text-xs mr-5">
            CONTACT US
          </Link>
          {token ? (
            <Avatar
              alt="Cindy Baker"
              className="cursor-pointer"
              onClick={() => history.push("/profile")}
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            />
          ) : (
            <button
              className="rounded-pill d-inline border border-white -mt-2 py-2 px-4 mb-2 text-white text-center text-sm"
              onClick={() => setModalShow(true)}
            >
              LOGIN/SIGNUP
            </button>
          )}
          <AuthModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
