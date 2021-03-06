import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Index";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import DetailProduct from "../pages/DetailProduct";
import Profile from "../pages/Profile";
import UploadProduct from "../pages/UploadProduct";
import { Provider } from "react-redux";
import store from "../store/index";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/product/upload" component={UploadProduct} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/me/cart" component={Cart} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/product/:id" component={DetailProduct} />
          <Route exact path="/product/category/:id" component={Product} />
          {/* <Route component={NotMatch} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
