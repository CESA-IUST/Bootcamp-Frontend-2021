import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Provider, useSelector } from "react-redux";


import Products from "./components/Products";
import Cart from "./components/Cart";
import Home from "./components/Home";


function App() {
  const state = useSelector(state => state)
  return (
      <BrowserRouter>
      <div>{state.length}</div>
        <ul>
          <li>
            <Link to="/">
              <button>HOME</button>
            </Link>
          </li>
          <li>
            <Link to="/products">Product</Link>
          </li>
          <li>
            <Link to="/cart">CART</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/products">
            {" "}
            <Products />{" "}
          </Route>
          <Route exact path="/cart">
            {" "}
            <Cart />{" "}
          </Route>
          <Route exact path="/">
            {" "}
            <Home />
          </Route>
          <Route path="*">Page Not Found!!!!</Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
