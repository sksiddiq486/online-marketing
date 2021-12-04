import React from 'react';
import './LeftSpecialContainer.css';
import { Container, Row, Col } from "react-bootstrap";
import {Button,TextField} from '@mui/material';


const LeftSpecialContainer = (props) => {
    return (
      <Container fluid>
        <div className="top-left-div">
          <Row>
            <Col className="col-xl-6 col-md-6 col-12 img-col">
              <img src="/assets/images/landingpage2.jpg" className='left-image'/>
            </Col>
            <Col className="col-xl-6 col-md-6 col-12">
              <Col className="left-content-title">
              Create a Branding to your business:
              </Col>
              <Col className='left-description'>
              Digital traffic Makers will undertake a process of research and brainstorming, analyzing your market positioning, competitors, current brand deficiencies and market trends. thus, we design exceptional branding solutions through:
              </Col>
              <Col className='left-content-subtitle'>Research & Analysis
              </Col>
              <Col className="pb-2 pt-1 left-description">
              Our Dubai based in house team will undertake a process of research and brainstorming, analyzing your market positioning, competitors, current brand deficiencies and market trends.
              </Col>
              <Col className='left-content-subtitle'>Creative Branding Concept
              </Col>
              <Col className="pb-2 pt-1 left-description">
              Our strategies which will allow to accurately position your brand in the market, reaching your desired audience with a well designed marketing  strategy.
              </Col>
              {/* <Col className="pb-2 pt-1 left-description">
              Our social media strategy involves daily management and user engagement that builds trust between you and your customers
              </Col>
              <Col className="pb-2 pt-1 left-description">
              By merging creativity with an up-to-date social media marketing knowledge, our services are seamlessly executed. We don’t compromise on the quality of our work. Neither should you.
              </Col> */}
            </Col>
          </Row>
        </div>
      </Container>
    );
  };

  export default LeftSpecialContainer;