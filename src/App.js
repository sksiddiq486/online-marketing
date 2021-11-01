import React, { useState } from "react";
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
import Button from "@restart/ui/esm/Button";
import Floting from './components/Floting';
import Floating from "./components/Floting";
import { TextField,Fab } from "@mui/material";
import Confirmation from './components/confirmation/Confirmation';
import Chatbot from "react-chatbot-kit";
import ChatBot from "./screens/chat/ChatBot";

const App = () => {
  const [chatStatus, setChatStatus] = useState(false)

  const chatClick=()=>{
      setChatStatus(!chatStatus);
  }
  return (
    <div>
      
      <Router>
        <Header />
         <Switch>
         <Route path="/confirmation">
            <Confirmation />
          </Route>
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
      <div className='floating-div'>
        <Floating chatClick={chatClick}/>
        </div>
        {chatStatus?(
        <div style={{position:'fixed',top:'50px'}}>
        <ChatBot/>
        </div>):null}
    </div>
  );
};

export default App;
