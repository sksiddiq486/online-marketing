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
      <Row className="">
        <Col md={6}>
          <img
            src="https://digitaltrafficmakers.com/wp-content/uploads/2021/10/cropped-DTM-Cover-1.jpg"
            className="logo"
          />
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
            ABOUTUS
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
                SEO SERVICE
              </Link>
            </MenuItem>

            <MenuItem className="menu-button">
              <Link to="/webdesign" className="navigation-link">
                WEB DESIGN & DEVELOPMENT{" "}
              </Link>
            </MenuItem>
            <SubMenu label="SOCIAL MEDIA MARKETING" className="menu-button">
              <Link to="/social" className="navigation-link">
                <MenuItem className="menu-button">FACEBOOK MARKETING</MenuItem>
              </Link>
              <Link to="/social" className="navigation-link">
                <MenuItem className="menu-button">INSTAGRAM MARKETING</MenuItem>
              </Link>
              <Link to="/social" className="navigation-link">
                <MenuItem className="menu-button">LINKEDIN MARKETING</MenuItem>
              </Link>
              <Link to="/social" className="navigation-link">
                <MenuItem className="menu-button">YOUTUBE MARKETING</MenuItem>
              </Link>
            </SubMenu>
            <MenuItem className="menu-button">
              <Link to="/ads" className="navigation-link">
                GOOGLE ADS
              </Link>
            </MenuItem>
          </Menu>
        </Col>
        <Col
          md={1}
          className="p-0 menu-button d-flex align-items-center justify-content-center"
        >
          {/* <Link className="navigation-link"> */}
          BLOGS
          {/* </Link> */}
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
