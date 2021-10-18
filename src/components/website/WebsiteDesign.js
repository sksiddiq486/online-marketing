import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const WebsiteDesign = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center main-div pb-5"
      fluid
    >
      <div style={{ width: "70%" }}>
        <Row className="title">Our Website Design & Development Service</Row>
        <Row className="text-content pb-3">
          Each customer has their own unique requirements. With our wide range
          of services and access to the latest technological and innovative
          developments, we always find a way to support them in their quest. In
          addition to this, we also offer web or tech consultancy to help you
          better understand the service or options that you might be most
          interested in. We have listed below the services that are on offer in
          our Dubai offices.
        </Row>
        <Row>
          <ContentButtons name="Website Design Services" />
          <ContentButtons name="E-Commerce Development" />
          <ContentButtons name="Mobile App Development" />
          <ContentButtons name="CRM, Email Marketing Integration" />
          <ContentButtons name="Website Conversion Optimization" />
          <ContentButtons name="Website Strategy & Consultancy" />
          <ContentButtons name="Digital Marketing" />
          <ContentButtons name="Website Marketing" />
          <ContentButtons name="Social Media Marketing" />
          <ContentButtons name="Microsite Development" />
          <ContentButtons name="SEO" />
          <ContentButtons name="Website Hosting" />
        </Row>
      </div>
    </Container>
  );
};

export default WebsiteDesign;

const ContentButtons = (props) => {
  return <Col className={`bg-warning p-2 m-2 col-auto`}>{props.name}</Col>;
};
