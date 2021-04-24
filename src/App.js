import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ReceivedProduct from "./components/ReceivedProduct/ReceivedProduct";
import Review from "./components/Review/Review";
import Shipment from "./components/Shipment/Shipment";
import Shop from "./components/Shop/Shop";

export const shareContext = createContext();
export const userContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [logedInUser, setLogedInUser] = useState({});

  return (
    <userContext.Provider value={[logedInUser, setLogedInUser]} className="App">
      <Router>
        <Header></Header>
        <shareContext.Provider value={[cart, setCart]}>
          <Switch>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route exact path="/">
              <Shop />
            </Route>
            <Route path="/review">
              <Review />
            </Route>
            <PrivateRoute path="/inventory">
              <Inventory />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/shipment">
              <Shipment />
            </PrivateRoute>
            <Route path="/product/:productKey">
              <ProductDetail />
            </Route>
            <Route path="/received-your-product">
              <ReceivedProduct />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </shareContext.Provider>
      </Router>
    </userContext.Provider>
  );
}

export default App;
