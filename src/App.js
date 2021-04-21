import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Main from "./Components/Main";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";
import Delivery from "./Components/Delivery/index";
import Reservation from "./Components/Lists/Reservations";
import Order from "./Components/Lists/Order";
import Profile from "./Components/Account/index";
import CompletePurchase from "./Components/Delivery/CompletePurchase";
import Custom from "./Components/Account/CustomHeader";
import OrdersReceived from "./Components/Orders/OrdersReceived";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/tableReservation" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/menu/:id" exact component={Menu} />
          <Route path="/delivery" exact component={Delivery} />
          <Route path="/customer/reservation" exact component={Reservation} />
          <Route path="/customer/order" exact component={Order} />
          <Route path="/complete/purchase" exact component={CompletePurchase} />
          <Route path="/custom" exact component={Custom} />
          <Route path="/ordersreceived" exact component={OrdersReceived} />
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
      </Router>
    </div>
  );
}

export default App;
