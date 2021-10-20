import React from "react";
import "./ContactUs.css";
import { Container, Row, Col } from "react-bootstrap";
import { Button, TextField, Input } from "@mui/material";
import CompanyInfo from "../../components/info/CompanyInfo";
import Footer from "../../components/footerNav/Footer";

const ContactUs = () => {
  return (
    <Container className=" p-0" fluid>
      <div className="back-image">
        <div className="form-div">
          <div style={{ width: "64%" }}>
            <Col className="form-title">Let’s Talk Business</Col>
            <Col className="form-bredGrum">Home {">>"} Contact Us</Col>
            <Col>
              <InputField placeholder="NAME" />
              <InputField placeholder="EMAIL" />
              <InputField placeholder="PHONE" />
              <InputField placeholder="COMPANY NAME" />
            </Col>

            <Col className="note-texts">
              We are cautious about your privacy. Volga Tigris Digital Marketing
              Agency uses the information you provide to us to contact you about
              our relevant content, products, and services. You can unsubscribe
              from these communications at any time, if you wish to. For more
              information, check out our{" "}
              <span className="text-warning">Privacy Policy</span>.
            </Col>
            <Col className="d-flex align-items-end justify-content-start">
              <Button variant="outlined" className="submit-button">
                Submit
              </Button>
            </Col>
          </div>
        </div>
        <div className="transparent-div">jjjhhjhjj</div>
        <LeftImageContainer />
        <CompanyInfo />
        <Footer />
      </div>
    </Container>
  );
};

export default ContactUs;

const InputField = (props) => {
  return (
    <div
      style={{
        marginBottom: "10px",
        width: "100%",
        background: "#141414",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <input placeholder={props.placeholder} className="input-field" />
    </div>
  );
};

const LeftImageContainer = () => {
  return (
    <Container style={{ background: "#ffffff" }} fluid>
      <div className="p-5" style={{ background: "#ffffff" }}>
        <Row>
          <Col className="col-4">
            <div className="image-col">
              <img
                src="https://www.volgatigris.com/images/pexelsa13.jpg"
                className="left-image"
              />
            </div>
          </Col>
          <Col className="col-8">
            <Col className="d-flex align-items-center justify-content-start title-container">
              How Now Are You?
            </Col>
            <Col className="col-10 d-flex align-items-center justify-content-center">
              Getting noticed is no more a chance, it’s a planned
              accomplishment. Funneling them digitally is the way forward. We
              help brands big and small, discover what makes them unique and
              channel it into propositions that outsell and outshine their
              competition online.
            </Col>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
