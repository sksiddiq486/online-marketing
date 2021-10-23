import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./WebDesignPage.css";
import WebsiteDesign from "../../components/website/WebsiteDesign";
import LatestBlog from "../../components/latestBlogs/LatestBlog";
import InfoForms from "../../components/forms/InfoForms";
import Footer from "../../components/footerNav/Footer";

const WebDesignPage = () => {
  return (
    <div>
      <ImageContainer />
      <ContentImageContainer />
      <WebsiteDesign />
      <WebDesignContainer />
      <LatestBlog />
      <InfoForms />
      <Footer />
    </div>
  );
};

export default WebDesignPage;

export const ImageContainer = () => {
  return (
    <Container fluid>
      <Row className="image-div">
        <div>Website Design & Development Services</div>
      </Row>
    </Container>
  );
};

const ContentImageContainer = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center main-div pb-5"
      fluid
    >
      <div style={{ width: "70%" }}>
        <Row className="title">
          What Makes Digital Traffic Makers Website Design & Development Special?
        </Row>
        <Row className="text-content pb-3">
          As the digital business market grew, the number of web and mobile app
          development companies also grew. It is essential to find an agency
          which is reliable and has more to offer. However, finding such a
          company among so many agencies that promise the same is undoubtedly
          tricky. What makes Volga Tigris unique and special
        </Row>
        <Row className="text-content pb-3">
          Digital Traffic Makers believes in creating lasting experiences. Almost 95% of
          our clientele are repeat customers. We invest in our client
          partnerships and blend in technology and creativity to innovate
          something unique for you. Be it managing the store content, developing
          a mobile application for your store, using search engine services or
          just marketing services, Digital Traffic Makers treats them all the same. We
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
    <Col className="main-contain">
      <div
        className="d-flex align-items-center justify-content-center"
        // onMouseLeave={() => alert("hiiiii")}
      >
        <img src={props.src} className="blue-icons" />
      </div>
      <div className="small-title">{props.title}</div>
      <div className="description pb-5">{props.des}</div>
    </Col>
  );
};

const WebDesignContainer = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center main-div pb-5"
      fluid
    >
      <div style={{ width: "70%" }}>
        <Row className="title">
          Why Digital Traffic Makers For Web Design & Development
        </Row>
        <Row className="text-content pb-3">
          We value our customers and want for them to trust Digital Traffic Makers
          wholeheartedly which is why we try to outline the reasons why are the
          best choice for you.
        </Row>
        <Row className="text-content pb-3">
          Our Experience – This has helped us understand that we are not to take
          anything for granted. More than trying to sell the same dish to
          everyone we understand the customers’ requirements – Their focus, why
          they have this requirement and then suggest only services that suit
          their need.
        </Row>

        <Row className="text-content pb-3">
          Creative and innovative web design – Our team always puts in the extra
          mile to understand more of the customers’ business need to come up
          with creative and eye catching but functional and seamless designs.
        </Row>
        <Row className="text-content pb-3">
          Technology is not a stumbling block – We work with both old and new
          technologies be it Drupal, Wordpress, SitCom, Sharepoint, Hubspot etc.
        </Row>
        <Row className="text-content pb-3">
          Promotions – Apart from creating your website, we also support with
          the launch and promotion of these websites reaching out to the masses
          and allowing for traffic to seep in. Local presence – We are based out
          of Dubai, one of the biggest and best commercial hubs in the middle
          east region. This allows for us to aware of the local culture and
          further ensure maximum reach in this part of the world.
        </Row>
        <Row className="text-content pb-3">
          Digital Traffic Makers should definitely be your pick for your web design and
          development needs. Our web development services are available in
          Dubai, Sharjah, Ajman, Abu Dhabi, and Ras Al-Khaima.
        </Row>
      </div>
    </Container>
  );
};
