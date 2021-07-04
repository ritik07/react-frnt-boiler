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
// import "antd/dist/antd.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './globalStyle/antd.css'
import './globalStyle/style.css';
import "./globalStyle/globalStyle.css";
import "./static/style/main.css";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router history={history} >
          <Switch>
            <PublicRoute path="/home" component={HomePage} />
            <PublicRoute  path="/log-in" component={Login} />
            <PublicRoute path="/sign-up" component={SignUp} />
            <Redirect from="/" to="/home/" />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
