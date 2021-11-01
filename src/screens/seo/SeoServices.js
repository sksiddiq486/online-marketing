import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SeoServices.css";
import { Button, TextField, Input } from "@mui/material";
import InfoForms from "../../components/forms/InfoForms";
import Footer from "../../components/footerNav/Footer";

const cardData = [
  {
    id: 1,
    url: "",
    title: "Local SEO",
    description:
      "We spawn businesses locally to magnify your organic visibility.",
  },
  {
    id: 2,
    url: "",
    title: "Technical SEO",
    description: "We resolve on-site SEO issues that impede your growth ",
  },
  {
    id: 3,
    url: "",
    title: "Wordpress SEO",
    description: "We resolve on-site SEO issues that impede your growth ",
  },
  {
    id: 4,
    url: "",
    title: "E-Commerce SEO",
    description: "We resolve on-site SEO issues that impede your growth ",
  },
  {
    id: 5,
    url: "",
    title: "Youtube SEO",
    description: "We resolve on-site SEO issues that impede your growth ",
  },
  {
    id: 6,
    url: "",
    title: "Global SEO",
    description: "We resolve on-site SEO issues that impede your growth ",
  },
  {
    id: 7,
    url: "",
    title: "Mobile SEO",
    description: "We resolve on-site SEO issues that impede your growth ",
  },
  {
    id: 8,
    url: "",
    title: "Page SEO",
    description: "We resolve on-site SEO issues that impede your growth ",
  },
  {
    id: 9,
    url: "",
    title: "SEO Analytics",
    description: "We resolve on-site SEO issues that impede your growth ",
  },
  {
    id: 10,
    url: "",
    title: "SEO Audit",
    description: "We resolve on-site SEO issues that impede your growth ",
  },
];

const services = [
  "Increased Traffic",
  "Gain Visibility",
  "Stand Out",
  "Generate Sales",
  "Build Revenue",
  "Convert Targets",
  "Enhance Presence",
  "More Customers",
];

const SeoServices = () => {
  return (
    <Container className="p-0" fluid>
      <HeaderImage />
      <ContentHeader />
      <CardImageContainer />
      <AvatarSeo />
      <InfoForms />
      <Footer />
    </Container>
  );
};

export default SeoServices;

const HeaderImage = () => {
  return (
    <Col className="top-col d-flex align-items-center justify-content-center">
      <div>
        <Col className="header-title">Search Engine Optimization (SEO)</Col>
        <Col className="d-flex align-items-center justify-content-center p-0 pt-2">
          <div className="red-div" />
        </Col>
        <Col className="d-flex align-items-center justify-content-center p-0 pt-5">
          <Button
            variant="outlined"
            color="error"
            style={{
              color: "white",
              backgroundColor: "#747474",
              borderWidth: "3px",
              borderColor: "red",
              height: "55px",
              width: "130px",
              borderRadius: 0,
            }}
          >
            CALL US
          </Button>
        </Col>
      </div>
    </Col>
  );
};

const ContentHeader = () => {
  return (
    <Col className="main-col p-5">
      <Col className="content-header">
        Higher Rankings, More Traffic, Better Visibility
      </Col>
      <Col className="d-flex align-items-center justify-content-center p-0 pt-2">
        <div className="red-div" />
      </Col>
      <Col className="p-0 pt-5 content-text-col">
        <Col className="pt-2">
          Digital Traffic Makers diligently research both your business and  
          and its competitors and then determine which steps need to be taken
          in order to maximize your business’s search results. The research 
          and the audit, both together help us to form an SEO strategy that 
          is ideal for your unique website/business.
        </Col>
        <Col className="pt-2">
          SEO has a major impact in everything from traffic to sales. Avatar
          Studios proffer bespoke (Search Engine Optimization) SEO services in
          Bangalore to gain more traction to your business. Our in-house experts
          craft tailored campaigns to generate more traffic by analyzing your
          digital assets and competitor platform whilst being budget centric.
        </Col>
        <Col className="pt-2">
          Avatar Studios drive positive result driven campaigns to bring in
          targeted traffic optimized with high local/international conversion
          rates to your business. Our SEO services offer your business, generate
          more traffic, rank on the top page, and convert potential customers to
          loyal ones. We use white hat SEO techniques like keyword research,
          analyze competitors, build links, and upgrade original content
          regularly to boost ranking and traffic tailored to your service and
          budget requirements.
        </Col>
        <Col className="pt-2">
          Avatar weaves fresh off-page and on-page SEO strategies for an
          increased return on investment (ROI) with more traffic, top ranking in
          SERPs, increased visibility, and obviously, business growth
          facilitating your company’s online presence from our SEO experts.
          Boost your website to gain more traffic, generate more conversions,
          and compete through organic on-page & off-page SEO techniques using
          the best Organic Link Building Services.
        </Col>
      </Col>
    </Col>
  );
};

const CardImageContainer = () => {
  return (
    <Col className="card-container">
      <Col className="d-flex align-items-center justify-content-start p-0 pt-2">
        <div className="red-div" />
      </Col>
      <Col className="service-header">Services</Col>
      <Col className="service-subheader">WHAT WE OFFER</Col>
      <Row className="row-container">
        {cardData.map((item, i) => {
          return <ImageContentCard item={item} />;
        })}
      </Row>
    </Col>
  );
};

const ImageContentCard = (props) => {
  return (
    <Col className="col-xl-4 col-md-4 col-12 p-3">
      <Col className="card-main p-5">
        <Col className="p-0 pb-5">
          <img
            style={{ height: "60px", width: "60px" }}
            src="data:image/jpeg;base64,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"
          />
        </Col>
        <Col className="cards-header">{props.item.title}</Col>
        <Col>{props.item.description}</Col>
      </Col>
    </Col>
  );
};

const AvatarSeo = () => {
  return (
    <Col className="p-5">
      <Col className="avatar-title">Why Choose Avatar for SEO Services?</Col>
      <Col className="avatar-subtitle">
        Is your company’s page ranking on the first page in search engine
        results or barely visible?
      </Col>
      <Col className="d-flex align-items-center justify-content-center p-0 pt-2">
        <div className="red-div" />
      </Col>
      <Row className="p-0 pt-5">
        <Col className='col-xl-6 col-md-6 col-12'>
          <Col className="choose-head">Choose us to move ahead!</Col>
          <Col className="d-flex align-items-center justify-content-start p-0 pt-2">
            <div className="red-div" />
          </Col>
          <Row className="p-5">
            {services.map((item, i) => {
              return (
                <Col
                  className="col-6 p-0 pb-5"
                  //   style={{ background: i == 0 ? "red" : null }}
                >
                  <Row className="d-flex align-items-center">
                    <Col className="col-2">
                      <div className="red-dot">
                        <div className="red-small-dot" />
                      </div>
                    </Col>
                    <Col className="item-text">{item}</Col>
                  </Row>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col className='col-xl-6 col-md-6 col-12 d-flex align-items-center justify-content-center '>
          <img src="https://www.avatarstudios.in/assets/images/seo/why-choose-seo-avatar.webp" />
        </Col>
      </Row>
    </Col>
  );
};
