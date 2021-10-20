import React from "react";
import "./App.css";
import Carousel from "react-bootstrap/Carousel";
import Home from "./screens/Home";
import WebDesignPage from "./screens/second/WebDesignPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GoogleAds from "./screens/googleAds/GoogleAds";
import ContactUs from "./screens/contact/ContactUs";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/ads">
          <GoogleAds />
        </Route>
        <Route path="/webdesign">
          <WebDesignPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
