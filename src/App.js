import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicDetails from "./components/BasicDetails";
import AddressDetails from "./components/AddressDetails";
import PaymentDetails from "./components/PaymentDetails";
import ShowDetails from "./components/ShowDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/payment">
          <PaymentDetails />
        </Route>
        <Route path="/address" component={AddressDetails} />
        <Route path="/final" component={ShowDetails} />
        <Route path="/">
          <BasicDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
