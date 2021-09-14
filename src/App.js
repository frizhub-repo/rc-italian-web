import "./App.css";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import Home from "./Components/Home";
import Main from "./Components/Main";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";
import Delivery from "./Components/Delivery/index";
import Reservation from "./Components/Lists/Reservations";
import Order from "./Components/Lists/Order";
import Profile from "./Components/Account/index";
import Custom from "./Components/Account/CustomHeader";
import OrdersReceived from "./Components/Orders/OrdersReceived";
import Navbar from "./Components/Navbar/Navbar";
import TableReservation from "./Components/TableReservation";
import DeliveryAddress from "Components/ExistingAddress";
import DeliveryTime from "Components/DeliveryTime/DeliveryTime";
import OrderSummary from "Components/Orders/OrderSummary";
import FooterItalian from "Components/Common/Footer";
import SignIn from "Components/Auth/signIn";
import SignUp from "Components/Auth/signUp";
import ForgotPassword from "Components/Auth/ForgotPassword"

function FooterWrapper({ location }) {
  if (location.pathname.match('/signIn') || location.pathname.match('signUp') || location.pathname.match('forgotPassword'))
    return null;
  return <FooterItalian />
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/tableReservation" exact component={TableReservation} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/delivery" exact component={Delivery} />
          <Route path="/customer/reservation" exact component={Reservation} />
          <Route path="/customer/order" exact component={Order} />
          <Route path="/chooseAddress" exact component={DeliveryAddress} />
          <Route path="/deliveryTime" exact component={DeliveryTime} />
          <Route path="/order/summary" exact component={OrderSummary} />
          <Route path="/ordersreceived/:id" exact component={OrdersReceived} />
          <Route path="/signIn" exact component={SignIn} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/forgotPassword" exact component={ForgotPassword} />
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
