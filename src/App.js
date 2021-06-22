import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { store } from "./redux/index";
import PublicRoute from "./custom-routes/PublicRoute";
import PrivateRoute from "./custom-routes/PrivateRoute";
import {history} from "./config/history";
import { Login } from "./pages/login";
import { SignUp } from "./pages/SignUp";
import { HomePage } from "./pages/home";
import { ProductPage } from "./pages/product";
import { SingleProduct } from "./pages/singleProduct";

// import "antd/dist/antd.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './globalStyle/antd.css'
import './globalStyle/style.css';
import "./globalStyle/globalStyle.css";
import "./static/style/main.css";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { BlogPage } from "./pages/blog";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FavouritPage } from "./pages/favourite";
import { QuotePage } from "./pages/quote";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router history={history} >
          <Switch>
            <PublicRoute path="/home" component={HomePage} />
            <PublicRoute path="/product" component={ProductPage} />
            <PublicRoute  path="/log-in" component={Login} />
            <PublicRoute path="/sign-up" component={SignUp} />
            <PublicRoute path="/blog" component={BlogPage} />
            <PublicRoute path="/favourite" component={FavouritPage} />
            <PublicRoute path="/quote" component={QuotePage} />
            <PublicRoute path="/single-product/:id" component={SingleProduct} />
            <Redirect from="/" to="/home/" />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
