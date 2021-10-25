import React from "react";
import "./App.css";
import Carousel from "react-bootstrap/Carousel";
import Home from "./screens/Home";
import WebDesignPage from "./screens/second/WebDesignPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GoogleAds from "./screens/googleAds/GoogleAds";
import ContactUs from "./screens/contact/ContactUs";
import SocialMedia from "./screens/socialMedia/SocialMedia";
import AboutUs from "./screens/about/AboutUs";
import Header from "./components/menu/Header";
import SeoServices from "./screens/seo/SeoServices";

const App = () => {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route path="/seo">
            <SeoServices />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/social">
            <SocialMedia />
          </Route>
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
    </div>
  );
};

export default App;
