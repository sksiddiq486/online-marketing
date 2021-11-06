import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageCarousel from "../components/ImageCarousel";
import "./Home.css";
import Services from "../components/services/Services";
import Footer from "../components/footerNav/Footer";

const reviewData=[
  {
    id:1,
    img:'',
    comment:'In today’s world where the cutthroat competition prevails your brand will have to stand on its own. Our company is armed with creative intelligence with visionary ideas and original thinking. We believe in dedication to hard work with integrity and honesty.'
  },
  {
    id:2,
    img:'',
    comment:'In today’s world where the cutthroat competition prevails your brand will have to stand on its own. Our company is armed with creative intelligence with visionary ideas and original thinking. We believe in dedication to hard work with integrity and honesty.'
  },
  {
    id:3,
    img:'',
    comment:'In today’s world where the cutthroat competition prevails your brand will have to stand on its own. Our company is armed with creative intelligence with visionary ideas and original thinking. We believe in dedication to hard work with integrity and honesty.'
  },
  {
    id:4,
    img:'',
    comment:'In today’s world where the cutthroat competition prevails your brand will have to stand on its own. Our company is armed with creative intelligence with visionary ideas and original thinking. We believe in dedication to hard work with integrity and honesty.'
  },
];

const Home = () => {
  return (
    <Container className='p-0 m-0' fluid>
      <div>
        <ImageCarousel />
      </div>
      {/* <div className="mains">
        <Random
          text={"Digital Traffic Makers"}
          // paused={this.state.paused}
          effect="verticalFadeOut"
          effectDirection="down"
          effectChange={5.0}
        />
      </div> */}

      <ContentDiv />
      <Container  className="gif-image pb-4 pt-0" fluid>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width:'100%',
            color:"red"
          }}
        >
          <img src="/assets/images/brand1.gif" style={{width:'70%'}}/>
        </div>
        <div style={{ color: "skyblue", textAlign: "center" }}>
          THESE SILOS SUFFICED. UNTIL THEY DIDN'T
        </div>
        <div style={{ color: "#ffffff", textAlign: "center" }}>
          In a world of intensifying global competition, accelerating
          technological change, and rising customer expectations, that old model
          of having separate disciplines fails to innovate across them. Yet that
          is where the most transformative possibilities await. Ittisa, a
          digital marketing agency, is a place where technology meets design,
          design meets data which leads to excellent business strategies being
          conceptualized and together these achieve disruptive digital
          transformation!
        </div>
      </Container>
      <Services />
      <ContentImage />
      <Footer />
      {/* <Floating /> */}
    </Container>
  );
};

export default Home;

const ContentDiv = () => {
  return (
      <Container className="p-5" fluid>
        <div className="bold-title">
          About Us
        </div>
        <div className="d-flex align-items-center justify-content-center">
        <div className="w-50 text-pattern">
          We are a team of highly motivated, passionate millennials for whom
          digital marketing is a way of life. Ittisa,
          one of the best digital marketing companies in Dubai
            believes in building world-class digital experiences that easily
            metamorphose into offline experiences and help brands tell stories,
            build communities and transform their business.
        </div>
        </div>
      </Container>
  );
};

const ContentImage = () => {
  return (
      <Container  className="bottom-container pb-3 pt-3" fluid>
        {reviewData.map((item,i)=>{
          return(
            <Row className='p-3'>
            <Col className='col-4 d-flex align-items-start justify-content-end' >
            <img src="/assets/images/computerimage.gif" className="profile-image" />
            </Col>
            <Col className='col-8 card w-50 p-3'>
              <Col>{item.comment}</Col>
            </Col>
            </Row>
          )
        })}

      </Container>
  );
};
