import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./InfoForms.css";
import { Button, TextField } from "@mui/material";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  ImLinkedin2,
} from "react-icons/fa";

const addressess = [
  {
    id: 1,
    buttonTitle: "Dubai",
    title: "AJMAN OFFICE",
    add1: "Al Dhabi building",
    add2: "King Faisal Street",
    add3: "Al Nuaimia 2",
    add4: "Ajman",
  },
  {
    id: 2,
    buttonTitle: "Sharjah",
    title: "SHARJAH OFFICE",
    add1: "Gulf Sky Building",
    add2: "Office No : 415",
    add3: "Sharjah",
    add4: "",
  },
];

const InfoForms = (props) => {
  const [index, setIndex] = useState(0);

  const indexFun = (i) => {
    setIndex(i);
  };
  return (
    <Container className="forms" fluid>
      <Row className="p-5">
        <Col className="col-6">
          <Col>— WORK WITH US</Col>
          <Col className="meet-title">
            Let’s team up and build something great.
          </Col>
          <Col className="off-title">Offices</Col>
          <Row className="pb-3">
            {addressess.map((item, i) => {
              return (
                <div
                  className={`${
                    index == i ? "col-auto p-0 border-div" : "col-auto p-0"
                  }`}
                >
                  <Button onClick={() => indexFun(i)}>
                    <div className="border-button">{item.buttonTitle}</div>
                  </Button>
                </div>
              );
            })}
          </Row>
          <Col className="pb-1">{addressess[index].title}</Col>
          <Col className="address-fields">{addressess[index].add1}</Col>
          <Col className="address-fields">{addressess[index].add2}</Col>
          <Col className="address-fields">{addressess[index].add3}</Col>
          <Col className="pt-4">
            <Row className="pb-2">
              <Col className="col-4 form-info-title">LETS CONNECT</Col>
              <Col className="form-info-title">CALL US AT</Col>
            </Row>
            <Row className="pb-3">
              <Col className="col-4 form-info-value">info@marketing.com</Col>
              <Col className="form-info-value">+971234677</Col>
            </Row>
          </Col>
          <Col className="form-info-title">FOLLOW US ON</Col>
          <Row className="p-3">
            <Col className="col-auto p-1">
              <FaInstagram />
            </Col>
            <Col className="col-auto p-1">
              <FaFacebookF />
            </Col>
            <Col className="col-auto p-1">
              <FaLinkedin />
            </Col>
          </Row>
        </Col>
        <Col className="col-6">
          <Col className="form">
            <InputField label="NAME" />
            <InputField label="EMAIL" />
            <InputField label="PHONE" />
            <InputField label="COMPANY NAME" />
            <Col className="note-text">
              We are cautious about your privacy. Volga Tigris Digital Marketing
              Agency uses the information you provide to us to contact you about
              our relevant content, products, and services. You can unsubscribe
              from these communications at any time, if you wish to. For more
              information, check out our{" "}
              <span className="text-warning">Privacy Policy</span>.
            </Col>
            <Col className="d-flex align-items-end justify-content-end">
              <Button variant="outlined" className="outlined-button">
                Submit
              </Button>
            </Col>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoForms;

const InputField = (props) => {
  return (
    <div style={{ paddingBottom: "10px" }}>
      <TextField id="standard-basic" label={props.label} variant="standard" />
    </div>
  );
};
