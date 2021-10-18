import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./InfoForms.css";
import { Button, TextField } from "@mui/material";

const InfoForms = (props) => {
  return (
    <Container className="forms" fluid>
      <Row>
        <Col className="col-6">
          <Col>— WORK WITH US</Col>
          <Col>Let’s team up and build something great.</Col>
          <Col>Offices</Col>
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
