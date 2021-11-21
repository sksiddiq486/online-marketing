import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutUs.css";
import Button from "@restart/ui/esm/Button";
import { Card, CardContent, TextField } from "@mui/material";
import Footer from "../../components/footerNav/Footer";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  ImLinkedin2,
} from "react-icons/fa";
import InfoForms from "../../components/forms/InfoForms";

const AboutUs = () => {
  return (
    <Container className="p-0 m-0" fluid>
      <Col className="top-about-banner d-flex align-items-center justify-content-center">
        <Col className="top-about-title">About Us</Col>
      </Col>
      <RightImageContainer />
      <TeamImages />
      {/* <CardForm /> */}
      <InfoForms />
      <Footer />
    </Container>
  );
};

export default AboutUs;

const RightImageContainer = (props) => {
  return (
    <Row className="right-main-row">
      <Col className='col-xl-6 col-12 col-md-6'>
        <div className="right-container-title pb-3">
          We Create Leads Not Just Traffic
        </div>
        <RedContainer />
        <Col className="text-color pb-3">
          <span className="span-div">Brandingnuts</span> - the newest digital
          marketing company in the town fathered by some of the best in industry
          experts. Though set up in 2019 Brandingnuts has garnered many happy
          clients in a very little span. They are renowned for offering
          ingenious digital strategies for every business irrespective of their
          domain or industry they are operating in. A never-ending smile is
          something that they have constantly on their faces which indicates
          that they are highly passionate about what they do.
        </Col>
        <Col className="text-color pb-3">
          We are a crackerjack digital marketing company in Hyderabad ganged up
          with artistic views.
        </Col>
        <Col className="text-color span-div">
          We know strategies for business growth, because we’ve grown our own
          businesses.
        </Col>
      </Col>
      <Col className='col-xl-6 col-12 col-md-6'>
        <img src="https://www.brandingnuts.com/img/create-img.png" style={{width:'100%'}}/>
      </Col>
    </Row>
  );
};

const RedContainer = () => {
  return (
    <div className="red-main-container pb-5">
      <div className="red-div-5"></div>
      <div className="red-div-3"></div>
      <div className="red-div-5"></div>
    </div>
  );
};

const TeamImages = () => {
  return (
    <Col className="p-5">
      <Col className="team-title">OUR TEAM</Col>
      <div className="right-container-title pb-3">
        Team You Want To Work With.
      </div>
      <RedContainer />
      <Row>
        <Col className="col-xl-4 d-flex justify-content-center">
          <div>
            <img src="https://www.brandingnuts.com/img/first-one.png" />

            <SocialIcons />
          </div>
        </Col>
        <Col className="col-xl-4 d-flex justify-content-center">
          <div>
            <img src="https://www.brandingnuts.com/img/second-one.png" />
            <SocialIcons />
          </div>
        </Col>
        <Col className="col-xl-4 d-flex justify-content-center">
          <div>
            <img src="https://www.brandingnuts.com/img/third-one.png" />
            <SocialIcons />
          </div>
        </Col>
      </Row>
    </Col>
  );
};

const SocialIcons = () => {
  return (
    <div className="d-flex justify-content-center pt-2 pb-2">
      <Row className="social-row">
        <Col>
          <FaFacebookF />
        </Col>
        <Col>
          <FaInstagram />
        </Col>
        <Col>
          <FaLinkedin />
        </Col>
      </Row>
    </div>
  );
};

const CardForm = (props) => {
  return (
    <Container className="p-5" fluid>
      <Col className="connect-customers d-flex justify-content-center">
        Contact us
      </Col>
      <Card className="p-2">
        <CardContent className="p-2">
          <div className="d-flex justify-content-between">
            <input className="text-field" placeholder="Name" />
            <input className="text-field" placeholder="Phone Number" />
            <input className="text-field" placeholder="Email" />
            <input className="text-field" placeholder="Website" />
          </div>
          <div className="p-3 d-flex justify-content-center">
            <Button>HAVE FROM AN EXPECT</Button>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};
