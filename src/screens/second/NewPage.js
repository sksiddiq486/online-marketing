import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./NewPage.css";

const NewPage = () => {
  return (
    <div>
      <ImageContainer />
      <ContentImageContainer />
    </div>
  );
};

export default NewPage;

export const ImageContainer = () => {
  return (
    <Container fluid>
      <Row className="image-div">
        <div>Website Design & Development Services</div>
      </Row>
    </Container>
  );
};

export const ContentImageContainer = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center main-div pb-5"
      fluid
    >
      <div style={{ width: "70%" }}>
        <Row className="title">
          What Makes Volga Tigris Website Design & Development Special?
        </Row>
        <Row className="text-content pb-3">
          As the digital business market grew, the number of web and mobile app
          development companies also grew. It is essential to find an agency
          which is reliable and has more to offer. However, finding such a
          company among so many agencies that promise the same is undoubtedly
          tricky. What makes Volga Tigris unique and special
        </Row>
        <Row className="text-content pb-3">
          Volga Tigris believes in creating lasting experiences. Almost 95% of
          our clientele are repeat customers. We invest in our client
          partnerships and blend in technology and creativity to innovate
          something unique for you. Be it managing the store content, developing
          a mobile application for your store, using search engine services or
          just marketing services, Volga Tigris treats them all the same. We
          have a wide range of web and mobile app development services. All
          these make it a very reliable one stop shop for all your design, web,
          and mobile application requirements.
        </Row>
        <Row>
          <ImageCard
            src="https://www.volgatigris.com/images/icons/webi1.svg"
            title="Usability"
            des="Customers are sometimes overwhelmed by web technology and are unsure of how to approach and its ease of use. Volga Tigris works hand in hand with you beginning with understanding your requirements, a no commitments consultation, and finally providing the required services always ensuring customer ease and comfort. Since we are locally available in Dubai allows customers to have that additional level of access and puts them at ease"
          />
          <ImageCard
            src="https://www.volgatigris.com/images/icons/webi2.svg"
            title="Scalability"
            des="The tools and techniques we apply allow for the business to function at the optimal that is it scales up or down both in terms of push as well as costs depending on how the rest of the environment is performing. Volga Tigris provides the right push at the right time whether it be for website design or digital marketing whilst ensuring satisfaction and value for money."
          />
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <ImageCard
            src="https://www.volgatigris.com/images/icons/webi3.svg"
            title="Responsiveness"
            des="The tools and techniques we apply allow for the business to function at the optimal that is it scales up or down both in terms of push as well as costs depending on how the rest of the environment is performing. Volga Tigris provides the right push at the right time whether it be for website design or digital marketing whilst ensuring satisfaction and value for money."
          />
        </Row>
      </div>
    </Container>
  );
};

const ImageCard = (props) => {
  return (
    <Col className="main-container">
      <div className="d-flex align-items-center justify-content-center">
        <img src={props.src} className="blue-icons" />
      </div>
      <div className="small-title">{props.title}</div>
      <div className="description pb-5">{props.des}</div>
    </Col>
  );
};
