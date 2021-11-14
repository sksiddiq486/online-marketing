import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./GoogleAds.css";
import Footer from "../../components/footerNav/Footer";
import InfoForms from "../../components/forms/InfoForms";

const GoogleAds = () => {
  return (
    <div>
      <ImageContainer />
      <RightImageContainer />
      <LeftImageContainer />
      <PPCServices />
      <InfoForms />
      <Footer />
    </div>
  );
};

export default GoogleAds;

const ImageContainer = () => {
  return (
    <Container fluid>
      <Row className="image-cons">
        <div className='d-flex align-items-center justify-content-center'>Website Design & Development Services</div>
      </Row>
    </Container>
  );
};

const RightImageContainer = (props) => {
  return (
    <Container fluid>
      <div className="p-5">
        <Row>
          <Col className="col-xl-8 col-md-8 col-12">
            <Col>
              PPC services are focused on helping your reach out to your
              customers online through paid search advertising. In simple words,
              it is one of the quickest and most cost-effective means of
              reaching out to your target audience just when they are looking
              for products/services that are similar to yours. It is an
              advertising medium that makes it possible for businesses to track
              and measure their ROI with accuracy and precision. Running a
              Google Adwords or pay per click Dubai campaign can work wonders in
              terms of helping you pre-plan your advertising budget and
              implement creative strategies to enhance your brand’s outreach.
            </Col>
            <Col className="pt-3">
              Digital Traffic Makers team of experts is here to help you benefit from a
              range of PPC campaign services, all of which are focused on
              helping your business achieve goals by generating leads. We
              promise to put in the best of our efforts to understand your needs
              and create a customized strategy that is in line with your goals.
            </Col>
          </Col>
          <Col className="col-xl-4 col-md-4 col-12">
            <img src="https://nitrocdn.com/xGuEWhaDQaHBysQMrdcqeJAtDUzaohMY/assets/static/optimized/rev-a58c691/wp-content/themes/useo/images/licon_words.png" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

const LeftImageContainer = () => {
  return (
    <Container fluid>
      <div className="p-5">
        <Row>
          <Col className="col-xl-4 col-md-4 col-12">
            <img src="https://nitrocdn.com/xGuEWhaDQaHBysQMrdcqeJAtDUzaohMY/assets/static/optimized/rev-a58c691/wp-content/themes/useo/images/licon_clock.png" />
          </Col>
          <Col className="col-xl-8 col-md-8 col-12">
            <Col className="left-title">
              Benefit From Our Expertise In PPC Management
            </Col>
            <Col>
              PPC services are focused on helping your reach out to your
              customers online through paid search advertising. In simple words,
              it is one of the quickest and most cost-effective means of
              reaching out to your target audience just when they are looking
              for products/services that are similar to yours. It is an
              advertising medium that makes it possible for businesses to track
              and measure their ROI with accuracy and precision. Running a
              Google Adwords or pay per click Dubai campaign can work wonders in
              terms of helping you pre-plan your advertising budget and
              implement creative strategies to enhance your brand’s outreach.
            </Col>
            <Col className="pt-3">
              Digital Traffic Makers team of experts is here to help you benefit from a
              range of PPC campaign services, all of which are focused on
              helping your business achieve goals by generating leads. We
              promise to put in the best of our efforts to understand your needs
              and create a customized strategy that is in line with your goals.
            </Col>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

const PPCServices = () => {
  return (
    <Container className="p-4 ppc-container" fluid>
      <Col className="ppc-title">Premier services at cost-effective prices</Col>
      <Col className="ppc-subtitle">The PPC services we offer include:</Col>
      <Row>
        <Col className="col-xl-6 col-md-6 col-12 d-flex justify-content-end p-3">
          <div className="pink-div">Google Ads</div>
        </Col>
        <Col className="col-xl-6 col-md-6 col-12 d-flex justify-content-start p-3">
          <div className="pink-div">Google Display Ads</div>
        </Col>
        <Col className="col-xl-6 col-md-6 col-12 d-flex justify-content-end p-3">
          <div className="pink-div">Google Shopping</div>
        </Col>
        <Col className="col-xl-6 col-md-6 col-12 d-flex justify-content-start p-3">
          <div className="pink-div">Google Remarketing</div>
        </Col>
      </Row>
    </Container>
  );
};
