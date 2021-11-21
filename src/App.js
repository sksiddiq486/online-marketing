import React, { useState,useEffect } from "react";
import "./App.css";
import Home from "./screens/Home";
import WebDesignPage from "./screens/second/WebDesignPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GoogleAds from "./screens/googleAds/GoogleAds";
import ContactUs from "./screens/contact/ContactUs";
import SocialMedia from "./screens/socialMedia/SocialMedia";
import AboutUs from "./screens/about/AboutUs";
import Header from "./components/menu/Header";
import SeoServices from "./screens/seo/SeoServices";
import Floating from "./components/Floting";
import ChatBot from "./screens/chat/ChatBot";
import Success from "./components/confirm/Success";
import Blog from "./screens/blogs/Blog";
import BlogDescription from "./screens/blogs/BlogDescription";
import MobileMenu from "./components/menu/MobileMenu";

const App = () => {
  const [chatStatus, setChatStatus] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(false);

  const chatClick=()=>{
      setChatStatus(!chatStatus);
  }

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(position,'poss')
};

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <div>
      <Router>
        <Header position={scrollPosition} visible={visible} setVisible={setVisible}/>
         <Switch>
         <Route path="/blogdescription">
            <BlogDescription />
          </Route>
         <Route path="/blog">
            <Blog />
          </Route>
         <Route path="/success">
            <Success />
          </Route>
         {/* <Route path="/confirmation">
            <Confirmation />
          </Route> */}
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
      
      <div className='floating-div'>
        <Floating chatClick={chatClick}/>
        </div>
        {visible?(
        <div className='menus'>
          <MobileMenu onClick={()=>setVisible(!visible)}/>
          </div>):null}
          </Router>
        {/* {chatStatus?(
        <div style={{position:'fixed',top:'50px'}}>
        <ChatBot/>
        </div>):null} */}
    </div>
  );
};

export default App;
