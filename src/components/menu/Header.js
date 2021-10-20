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
        <Col md={1} className="align-items-center d-flex">
          <Button className="menu-button">HOME</Button>
        </Col>
        <Col md={1} className="">
          <Button className="menu-button">ABOUTUS</Button>
        </Col>
        <Col md={1}>
          <Menu
            menuButton={
              <MenuButton className="menu-button">SERVICES</MenuButton>
            }
          >
            <MenuItem className="menu-button">SEO SERVICE</MenuItem>

            <MenuItem className="menu-button">
              <Link to="/webdesign" className="navigation-link">
                WEB DESIGN & DEVELOPMENT{" "}
              </Link>
            </MenuItem>
            <SubMenu label="SOCIAL MEDIA MARKETING" className="menu-button">
              <MenuItem className="menu-button">FACEBOOK MARKETING</MenuItem>
              <MenuItem className="menu-button">INSTAGRAM MARKETING</MenuItem>
              <MenuItem className="menu-button">LINKEDIN MARKETING</MenuItem>
              <MenuItem className="menu-button">YOUTUBE MARKETING</MenuItem>
            </SubMenu>
            <MenuItem className="menu-button">
              <Link to="/ads" className="navigation-link">
                GOOGLE ADS
              </Link>
            </MenuItem>
          </Menu>
        </Col>
        <Col md={1}>
          <Button className="menu-button">BLOGS</Button>
        </Col>
        <Col>
          <Button className="contact-button">CONTACT US</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
