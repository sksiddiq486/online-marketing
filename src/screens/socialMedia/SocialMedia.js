import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactUs from "../contact/ContactUs";
import "./SocialMedia.css";
import { Card, CardContent, TextField } from "@mui/material";
import Footer from "../../components/footerNav/Footer";
import InfoForms from "../../components/forms/InfoForms";

const SocialMedia = () => {
  return (
    <Container className="p-0" fluid>
      <Col className="top-banner">
        <Col className="top-title">Social Media Marketing</Col>
        <Col className="sub-title">We are a Promethean</Col>
        <Col className="d-flex  justify-content-center">
          <Button className="start-button">GET STARTED NOW</Button>
        </Col>
      </Col>
      <TitleDes />
      <SecondTitleContainer />
      <LeftImageContainer
        leftImage={"https://www.brandingnuts.com/img/ad-audience.jpg"}
        title={"Advertise to Your Exact Audience"}
        subTitle={"Target the customer, not the keyword"}
        des1={
          "Paid advertisement campaigns on social media sites offer various benefits when compared to that of traditional pay-per-click (PPC) on search engines."
        }
        des2={
          "Social media promotion enables you to separate customers with particular locations, jobs, hobbies, skills, interests, associations, gender, age, etc."
        }
        des3={
          "Social media advertising campaigns always help you in targeting the searcher rather than the search term. You can accurately reach the desired audience perfectly."
        }
      />
      <RightImageContainer />
      <LeftImageContainer
        leftImage={"https://www.brandingnuts.com/img/boost-user.jpg"}
        title={"Boost"}
        subTitle={"High user engagement"}
        des1={
          "On social media sites like Facebook, just a minute portion of your audience will see your postings. And then comes this boosted posting into the picture. It plays a very significant role in social media marketing services. Sharing high-standard content like blogs, videos, and clippings of your business will highly engage your audience and increase the reach to your page."
        }
        des2={""}
        des3={""}
      />
      <Row className="p-4">
        <SocialMediaContent
          socialMediaImage="https://www.brandingnuts.com/img/facebook-smm.png"
          data={[
            "Drive Traffic",
            "Connect with the audience",
            "Large user base",
            "Reviews",
            "Lead possibilities",
            "Raise Awareness",
            "Brand Reputation",
          ]}
        />
        <SocialMediaContent
          socialMediaImage="https://www.brandingnuts.com/img/twitter-smm.png"
          data={[
            "Share",
            "Elevate",
            "Interact with the audience",
            "Associate with Influencers",
            "Channels",
            "Produce Leads",
            "Loyalty",
          ]}
        />
        <SocialMediaContent
          socialMediaImage="https://www.brandingnuts.com/img/insta-smm.png"
          data={[
            "Network",
            "Target large audience",
            "Connect with Influencers",
            "Hire New Talent",
            "Produce Leads",
            "Promote Content",
          ]}
        />
        <SocialMediaContent
          socialMediaImage="https://www.brandingnuts.com/img/link-smm.png"
          data={[
            "Grow Awareness",
            "Direct Traffic",
            "Generate Leads",
            "Brand reputation",
            "Boost Conversions",
            "Establish Trends",
          ]}
        />
      </Row>
      {/* <CardForm /> */}
      <InfoForms />
      <Footer />
    </Container>
  );
};

export default SocialMedia;

const TitleDes = () => {
  return (
    <Container className="title-des-container p-5" fluid>
      <Col className="d-flex justify-content-center connect-customers">
        Connect with customers, creep your sales
      </Col>
      <Col className="d-flex  justify-content-center sub-unique-title">
        Sway your audience in unique ways.
      </Col>
      <Col className="d-flex  justify-content-center center-text">
        Social media marketing services gather more authority by hitting your
        target audience with a note modeled to enthuse action. With a perfectly
        designed social media advertising strategy from Branding Nuts, we unwrap
        a completely new way to strike your customers.
      </Col>
      <Row className="p-4">
        {/* <Col className="bg-info"> */}
        <ImageTitleContainer
          img="https://www.brandingnuts.com/img/audience.png"
          title="Audience"
          des="Targeting by age group Segregate customers by location. Classifying
        customers by income."
        />
        {/* </Col> */}
        <ImageTitleContainer
          img="https://www.brandingnuts.com/img/interests.png"
          title="Interests"
          des="Find customers by their activities. Locating users with special skills"
        />
        <ImageTitleContainer
          img="https://www.brandingnuts.com/img/behaviour.png"
          title="Behaviour"
          des="Promote by previous purchases. Targeting by device utilization Users who viewed your website. People who visited your web"
        />
        <ImageTitleContainer
          img="https://www.brandingnuts.com/img/list.png"
          title="Lists"
          des="Find customers by their activities. Locating users with special skills"
        />
      </Row>
    </Container>
  );
};

const ImageTitleContainer = (props) => {
  return (
    <Col className="col-3">
      <div className="d-flex align-items-center justify-content-center">
        <img src={props.img} />
      </div>
      <Col className="image-title">{props.title}</Col>
      <Col className="center-text">{props.des}</Col>
    </Col>
  );
};

const SecondTitleContainer = () => {
  return (
    <Container className="title-des-container p-5" fluid>
      <Col className="d-flex justify-content-center connect-customers">
        Social Media Growth
      </Col>
      {/* <Col className="d-flex  justify-content-center sub-unique-title">
      Sway your audience in unique ways.
    </Col> */}
      <Col className="d-flex  justify-content-center center-text">
        We are an astute social media marketing agency always devising ingenious
        marketing campaigns to deeply dive into the minds of the digital
        audience. Driving customers and expanding your reach are some things in
        which we are highly specialized. Our intriguing social media marketing
        strategies will surely build a strong social media presence while
        exhibiting your organization's disposition.
      </Col>
    </Container>
  );
};

const LeftImageContainer = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="p-5">
            <img src={props.leftImage} />
          </div>
        </Col>
        <Col>
          <Col className="left-image-title">{props.title}</Col>
          <Col className="left-image-subtitle">{props.subTitle}</Col>
          <Col className="text-color">{props.des1}</Col>
          <Col className="text-color">{props.des2}</Col>
          <Col className="text-color">{props.des3}</Col>
          <Col>
            <ul
              style={{
                paddingLeft: "20px",
                paddingTop: "15px",
              }}
            >
              <li>Increase your reach</li>
              <li>Elevate high-quality content</li>
              <li>Boost visibility</li>
            </ul>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

const RightImageContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="p-5 pt-0">
            <Col className="left-image-title">
              Being Social is all that is important
            </Col>
            <Col className="left-image-subtitle">Social media posting</Col>
            <Col className="text-color">
              Social media postings are something that can engage users well.
              This means you need to do these postings regularly to remain
              connected with your audience. Of course, this is just a part of
              the entire subject.
            </Col>
            <Col>
              <ul
                style={{
                  paddingLeft: "20px",
                  paddingTop: "15px",
                }}
              >
                <li>High engagement of the audience</li>
                <li>Organic growth</li>
                <li>Stellar social media postings.</li>
              </ul>
            </Col>
          </div>
        </Col>
        <Col>
          <img src="https://www.brandingnuts.com/img/being-social.jpg" />
        </Col>
      </Row>
    </Container>
  );
};

const SocialMediaContent = (props) => {
  return (
    <Col>
      <div style={{ paddingLeft: "10px" }}>
        <img src={props.socialMediaImage} />
      </div>
      <Col>
        <ul>
          {props.data.map((item, i) => {
            return <li className="p-1">{item}</li>;
          })}
        </ul>
      </Col>
    </Col>
  );
};

const CardForm = (props) => {
  return (
    <Container className="p-5" fluid>
      <Col className="connect-customers d-flex justify-content-center">
        Contact us
      </Col>
      <Card className="p-2">
        <CardContent className="p-2">
          <div className="d-flex justify-content-between">
            <input className="text-field" placeholder="Name" />
            <input className="text-field" placeholder="Phone Number" />
            <input className="text-field" placeholder="Email" />
            <input className="text-field" placeholder="Website" />
          </div>
          <div className="p-3 d-flex justify-content-center">
            <Button>HAVE FROM AN EXPECT</Button>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};
