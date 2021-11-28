import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import "./LandingHeader.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FiMenu,FiX } from "react-icons/fi";

const LandingHeader = (props) => {
  return (
<div>
    <Container className="p-3  head-container mb-5" fluid>
      <div className='d-lg-block d-none'>
      <Row>
        <Col md={6}>
          <div className='main-title-div'>
          GLMA AGENCY
          </div>
        </Col>
        <Col
          md={1}
          className="p-0 menu-button d-flex align-items-center justify-content-center"
        >
          <Link to="/home" className="navigation-link">
            Get a Quote
          </Link>
        </Col>
        <Col
          md={1}
          className="p-0 d-flex align-items-center justify-content-center"
        >
          <Link to="/aboutus" className="navigation-link menu-button">
            Social Services
          </Link>
        </Col>
        <Col md={1} className="p-0 d-flex align-items-center justify-content-center menu-button">
        Features
        </Col>
        <Col
          md={1}
          className="p-0 menu-button d-flex align-items-center justify-content-center menu-button"
        >
          Projects
        </Col>
        <Col md={1} className="p-0 d-flex align-items-center justify-content-center menu-button">
        Contact Us
        </Col>
      </Row>
      </div>
    </Container>
    <Container className='pl-5 pr-5 pt-3 pb-3 d-xl-none m-0' fluid>
      <Row>
      <Col className=''>
      <div className='main-mobile-div'>
          GLMA AGENCY
          </div>
      </Col>
      <Col className='d-flex align-items-center justify-content-end'>
        {!props.visible?(
           <FiMenu onClick={()=>props.setVisible(!props.visible)}/>):(<FiX onClick={()=>props.setVisible(!props.visible)}/>)}
      </Col>
      </Row>
      </Container>
    </div>
      );
};

export default LandingHeader;
