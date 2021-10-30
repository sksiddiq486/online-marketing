import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <Container  className="pt-3 pb-3" fluid>
      <Col className="d-flex align-items-center justify-content-center title-container pb-5">
        SERVICES
      </Col>
      <Row className="d-flex align-items-center justify-content-center">
        <Col className="col-xl-4 col-12 col-md-4">
        <div className='d-flex align-items-center justify-content-center'>
            <img
              src="https://ittisa.com/wp-content/uploads/2019/09/cx9waHy_1.png"
              className="image"
            />          </div>

            <div className="heading">UI UX DESIGN</div>
            <div className="button-div">
              <Button>CLICK HERE</Button>
            </div>
        </Col>
        <Col className="col-xl-4 col-12 col-md-4">
          <div className='d-flex align-items-center justify-content-center'>
          <img
            src="https://ittisa.com/wp-content/uploads/2019/08/KTAN8Nl-1-1-1.png"
            className="image"
          />
          </div>
          <div className="heading">BRANDING</div>
          <div className="button-div">
            <Button>CLICK HERE</Button>
          </div>
        </Col>
        <Col className="col-xl-4 col-12 col-md-4">
        <div className='d-flex align-items-center justify-content-center'>

          <img
            src="https://www.ittisa.com/wp-content/uploads/2019/08/nQc6ReG_1_1.png"
            className="image"
          />
          </div>
          <div className="heading">PROGRAMATIC ADS</div>
          <div className="button-div">
            <Button>CLICK HERE</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
