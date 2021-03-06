import jwtDecode from "jwt-decode";
import React from "react";
import { useDispatch } from "react-redux";
import axiosIntance from "../utils/axios-configured";
import { GET_DELIVERY_ADDRESS } from "../utils/types";

const UserContext = React.createContext();

export function UserProvider({ children }) {
  const disp = useDispatch();
  const [restaurant, setRestaurant] = React.useState({});
  const [customer, setCustomer] = React.useState({});
  const [refetchCustomer, setRefetchCustomer] = React.useState(false);
  const [token, setToken] = React.useState(
    window?.localStorage?.getItem("token")
  );

  const refetchCustomerHandler = () => setRefetchCustomer((prev) => !prev);
  React.useEffect(() => {
    if (token) {
      try {
        let decoded = jwtDecode(token);
        if (Date.now() >= decoded.exp * 1000) {
          throw Error("token expired");
        }
        async function fetchCustomerinfo() {
          try {
            axiosIntance.defaults.headers.common["Authorization"] =
              window.localStorage.getItem("token");
            const res = await axiosIntance.get("/api/v1/customers");
            disp({
              type: GET_DELIVERY_ADDRESS,
              payload: res?.data?.data?.addresses,
            });
            setCustomer(res?.data?.data);
          } catch (error) {
            console.log({ error });
          }
        }
        fetchCustomerinfo();
      } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
        window.location.reload();
      }
    }
  }, [token, refetchCustomer]);

  React.useEffect(() => {
    async function fetchRestaurantInfo() {
      try {
        const res = await axiosIntance.get("/api/v1/app/public/restaurant");
        setRestaurant(res?.data?.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRestaurantInfo();
  }, []);
  return (
    <UserContext.Provider
      value={{ token, setToken, restaurant, customer, refetchCustomerHandler }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext can only be used inside UserProvider");
  }
  return context;
}
