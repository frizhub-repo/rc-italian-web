import jwtDecode from "jwt-decode";
import React from "react";

const UserContext = React.createContext();

export function UserProvider({ children }) {
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
  return (
    <UserContext.Provider value={{ token, setToken }}>
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
