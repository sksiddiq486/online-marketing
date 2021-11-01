import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import ImageCarousel from "../components/ImageCarousel";
import Header from "../components/menu/Header";
import "./Home.css";
import Services from "../components/services/Services";
import Footer from "../components/footerNav/Footer";
import Floating from "../components/Floting";
import { Random } from "react-animated-text";

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
    <div style={{ backgroundColor: "#eeeeee" }}>
      <img
        src="https://ittisa.com/wp-content/uploads/2017/07/REBELS.png"
        style={{ width: "100%", resize: "horizontal",height:'80vh' }}
      />
      <Container className="pb-2">
        <div className="content-title">
          Digital Marketing Agency Dubai, UAE
        </div>
        <div className="content-title">-A GOOGLE PARTNER AGENCY-</div>
        <div className="content-title">
          We are a team of highly motivated, passionate millennials for whom
          digital marketing is a way of life. Ittisa,{" "}
          <strong>one of the best digital marketing companies in Dubai</strong>,
          <span>
            believes in building world-class digital experiences that easily
            metamorphose into offline experiences and help brands tell stories,
            build communities and transform their business.
          </span>
        </div>
      </Container>
    </div>
  );
};

const ContentImage = () => {
  return (
    <div
    // className="background-div"
    >
      <Container fluid className="bottom-container pb-3">
        <Col
          className="text-para"
          style={{ fontSize: "60px", fontWeight: "bold" }}
        >
          Web Design
        </Col>
        <Col className="text-para" style={{ fontSize: "30px", color: "black" }}>
          in Dubai
        </Col>
        <Col className="text-para pb-2">
          In today’s world where the cutthroat competition prevails your brand
          will have to stand on its own. Our company is armed with creative
          intelligence with visionary ideas and original thinking. We believe in
          dedication to hard work with integrity and honesty. At Element 8 we
          are passionate people who think in delivering outstanding results. At
          Element 8 you can count on us to be an integrated communications
          agency with a good track record that can take your company and frame
          your project as an extension of the core promise of your brand.
        </Col>
        <Col className="text-para pb-2">
          Our company has a profound sense of teamwork that they use to satisfy
          our customers need. Comparing other web design company Dubai, in our
          company we share truthfulness, modesty, and laughter. The staff is
          made of a diversified background of talents and knowledge and uses
          this knowledge to keep the creative juices flowing making this a
          strong foundation
        </Col>
        <Col className="text-para">
          Because we love what we do and because we want our clients to feel the
          same way about our work, Element 8 keeps everything 100% in-house.
          From designing, development, or digital marketing.We take pride in our
          team, in which every member aims to contribute to our mutual goal – to
          deliver and maintain, at all means necessary, the highest quality of
          service from dubai to the world.
        </Col>
        <Col>
          <img src="/assets/images/computerimage.gif" style={{ width: "100%" }} />
        </Col>
      </Container>
    </div>
  );
};
