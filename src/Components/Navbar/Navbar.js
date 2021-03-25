import React from "react";
import AuthModal from "../Auth/authModal";
import { useUserContext } from "../../Context/userContext";
import { Link } from "react-router-dom";

function Navbar() {
  const [modalShow, setModalShow] = React.useState(false);
  let { token, setToken } = useUserContext();
  const logout = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
  };
  React.useEffect(() => {
    setToken(localStorage.getItem("token"));
  });
  return (
    <header className="text-gray-700 body-font w-full ">
      <div className=" mx-auto flex   justify-content-center w-full">
        <div
          className="md:ml-auto md:mr-auto flex w-full    justify-center"
          style={{ textShadow: "2px 4px 6px #000132" }}
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
          <Link to="/customer/reservation" className="text-white text-xs mr-5">
            MY RESERVATION's
          </Link>
          <Link to="/customer/order" className="text-white text-xs mr-5">
            MY ORDER's
          </Link>
          <Link to="contact" className="text-white text-xs mr-5">
            CONTACT US
          </Link>
          {token ? (
            <button
              onClick={logout}
              className="rounded-pill d-inline border border-white -mt-2 py-2 px-4 mb-2 text-white text-center text-sm"
            >
              LOG OUT
            </button>
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
