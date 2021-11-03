import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <Container  className="pt-3 pb-5" fluid>
      <Col className="d-flex align-items-center justify-content-center title-container pb-5">
        SERVICES
      </Col>
      <Row className="d-flex align-items-center justify-content-center">
        <Col className="col-xl-3 col-12 col-md-3">
        <div className='d-flex align-items-center justify-content-center'>
            <img
              src="/assets/images/services1.jpg"
              className="image"
            />          </div>

            <div className="heading">UI UX DESIGN</div>
            <div className="para-text">
          In a world of intensifying global competition, accelerating
          technological change, and rising customer expectations, that old model
          of having separate disciplines fails to innovate across them. Yet that
          is where the most transformative possibilities await.
        </div>
            <div className="button-div">
              <Button className='click-button'>KNOW MORE</Button>
            </div>
        </Col>
        <Col className="col-xl-3 col-12 col-md-3">
          <div className='d-flex align-items-center justify-content-center'>
          <img
            src="/assets/images/services2.jpg"
            className="image"
          />
          </div>
          <div className="heading">BRANDING</div>
          <div className="para-text">
          In a world of intensifying global competition, accelerating
          technological change, and rising customer expectations, that old model
          of having separate disciplines fails to innovate across them. Yet that
          is where the most transformative possibilities await.
        </div>
          <div className="button-div">
            <Button className='click-button'>KNOW MORE</Button>
          </div>
        </Col>
        <Col className="col-xl-3 col-12 col-md-3">
        <div className='d-flex align-items-center justify-content-center'>

          <img
            src="/assets/images/services3.jpg"
            className="image"
          />
          </div>
          <div className="heading">PROGRAMATIC ADS</div>
          <div className="para-text">
          In a world of intensifying global competition, accelerating
          technological change, and rising customer expectations, that old model
          of having separate disciplines fails to innovate across them. Yet that
          is where the most transformative possibilities await.
        </div>
          <div className="button-div">
            <Button className='click-button'>KNOW MORE</Button>
          </div>
        </Col>
        <Col className="col-xl-3 col-12 col-md-3">
        <div className='d-flex align-items-center justify-content-center'>

          <img
            src="/assets/images/services3.jpg"
            className="image"
          />
          </div>
          <div className="heading">PROGRAMATIC ADS</div>
          <div className="para-text">
          In a world of intensifying global competition, accelerating
          technological change, and rising customer expectations, that old model
          of having separate disciplines fails to innovate across them. Yet that
          is where the most transformative possibilities await.
        </div>
          <div className="button-div">
            <Button className='click-button'>KNOW MORE</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
