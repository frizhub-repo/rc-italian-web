import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Main from "./Components/Main";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";
import Delivery from "./Components/Delivery/index";
import { useUserContext } from "./Context/userContext";

function App() {
  const { token } = useUserContext();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />

          <Route path="/tableReservation" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/menu/:id" exact component={Menu} />
          <Route path="/order" exact component={Delivery} />
          <Route
            path="*"
            render={() => (
              <div>
                <h1>The page you are looking for does not exist.</h1>
                <h2>It looks like one of the developers fell asleep</h2>
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
