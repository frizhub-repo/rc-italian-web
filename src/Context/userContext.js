import jwtDecode from "jwt-decode";
import React from "react";
import axiosIntance from "../utils/axios-configured";

const UserContext = React.createContext();

export function UserProvider({ children }) {
  const [restaurant, setRestaurant] = React.useState({});
  const [token, setToken] = React.useState(
    window?.localStorage?.getItem("token")
  );
  React.useEffect(() => {
    if (token) {
      try {
        let decoded = jwtDecode(token);
        if (Date.now() >= decoded.exp * 1000) {
          throw Error("token expired");
        }
      } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
        window.location.reload();
      }
    }
  }, [token]);

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
    <UserContext.Provider value={{ token, setToken, restaurant }}>
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
