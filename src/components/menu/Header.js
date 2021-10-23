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
          <Link to="/aboutus" className="navigation-link">
            <Button className="menu-button">ABOUTUS</Button>
          </Link>
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
        <Col md={1}>
          <Button className="menu-button">BLOGS</Button>
        </Col>
        <Col>
          <Link to="/contact" className="navigation-link">
            <Button className="contact-button">CONTACT US</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
