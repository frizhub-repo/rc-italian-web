import ForgotPassword from "Components/Auth/ForgotPassword";
import NewPassword from "Components/Auth/NewPassword";
import ResetPassword from "Components/Auth/ResetPassword";
import SignIn from "Components/Auth/signIn";
import SignUp from "Components/Auth/signUp";
import FooterItalian from "Components/Common/Footer";
import DeliveryTime from "Components/DeliveryTime/DeliveryTime";
import DeliveryAddress from "Components/ExistingAddress";
import OrderSummary from "Components/Orders/OrderSummary";
import Settings from "Components/Settings";
import { useUserContext } from "Context/userContext";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact";
import Delivery from "./Components/Delivery/index";
import Order from "./Components/Lists/Order";
import Reservation from "./Components/Lists/Reservations";
import Main from "./Components/Main";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar/Navbar";
import OrdersReceived from "./Components/Orders/OrdersReceived";
import TableReservation from "./Components/TableReservation";

function FooterWrapper({ location }) {
  if (
    location.pathname.match("/signIn") ||
    location.pathname.match("signUp") ||
    location.pathname.match("forgotPassword") ||
    location.pathname.match("profile")
  )
    return null;
  return <FooterItalian />;
}

function App() {
  const { token } = useUserContext();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/tableReservation" exact component={TableReservation} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/delivery" exact component={Delivery} />
          <Route path="/customer/reservation" exact component={Reservation} />
          <Route path="/customer/order" exact component={Order} />
          <Route path="/signIn" exact component={SignIn} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/forgotPassword" exact component={ForgotPassword} />
          <Route path="/resetPassword/:id" exact component={ResetPassword} />
          <Route path="/newPassword/:id/:code" exact component={NewPassword} />
          {token ? (
            <>
              <Route path="/profile" exact component={Settings} />
              <Route path="/chooseAddress" exact component={DeliveryAddress} />
              <Route path="/deliveryTime" exact component={DeliveryTime} />
              <Route path="/order/summary" exact component={OrderSummary} />
              <Route
                path="/ordersreceived/:id"
                exact
                component={OrdersReceived}
              />
            </>
          ) : (
            <Redirect to="/" />
          )}
          <Route
            path="*"
            render={() => (
              <div>
                <h1>Oops, Page not found.</h1>
                <a href="/">Go Back</a>
              </div>
            )}
          />
        </Switch>
        <WrappedFooter />
      </Router>
    </div>
  );
}

const WrappedFooter = withRouter(FooterWrapper);
export default App;
