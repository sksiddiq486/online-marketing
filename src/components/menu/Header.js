import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import "./Header.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <Container fluid className="p-3 d-lg-block d-none">
      <Row className="pl-5">
        <Col md={6} >
          <div className='logo-col'>
          <img
            src="/assets/images/logo.png"
            className="logo"
          />
          </div>
        </Col>
        <Col
          md={1}
          className="p-0 menu-button d-flex align-items-center justify-content-center"
        >
          <Link to="/home" className="navigation-link">
            HOME
          </Link>
        </Col>
        <Col
          md={1}
          className="p-0 d-flex align-items-center justify-content-center"
        >
          <Link to="/aboutus" className="navigation-link menu-button">
            ABOUT US
          </Link>
        </Col>
        <Col md={1} className="">
          <Menu
            menuButton={
              <MenuButton className="menu-button p-0 p-3">SERVICES</MenuButton>
            }
          >
            <MenuItem className="menu-button">
              <Link to="/seo" className="navigation-link">
                BRANDING
              </Link>
            </MenuItem>

            <MenuItem className="menu-button">
              <Link to="/webdesign" className="navigation-link">
                WEBSITE DEVELOPMENT{" "}
              </Link>
            </MenuItem>
            <SubMenu label="DIGITAL MARKETING" className="menu-button">
              <Link to="/social" className="navigation-link">
                <MenuItem className="menu-button">SOCIAL MEDIA MARKETING</MenuItem>
              </Link>
              <Link to="/social" className="navigation-link">
                <MenuItem className="menu-button">SERACH ENGINE MARKETING</MenuItem>
              </Link>
              <Link to="/social" className="navigation-link">
                <MenuItem className="menu-button">SEARCH ENGINE OPTIMIZATION</MenuItem>
              </Link>
              <Link to="/social" className="navigation-link">
                <MenuItem className="menu-button">EMAIL MARKETING</MenuItem>
              </Link>
            </SubMenu>
            <MenuItem className="menu-button">
              <Link to="/ads" className="navigation-link">
                MOBILE APPLICATION DEVELOPMENT
              </Link>
            </MenuItem>
          </Menu>
        </Col>
        <Col
          md={1}
          className="p-0 menu-button d-flex align-items-center justify-content-center"
        >
          <Link to='/blog' className="navigation-link">
          BLOGS
          </Link>
        </Col>
        <Col className="d-flex align-items-center justify-content-start p-0">
          <Link to="/contact" className="navigation-link">
            <Button className="contact-button">CONTACT US</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
