import React from 'react';
import './LandingFooter.css';
import { Container, Row, Col } from "react-bootstrap";
import {Button,TextField} from '@mui/material';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    ImLinkedin2,
  } from "react-icons/fa";

const LandingFooter=()=>{
    return(
        <Container className='m-0 p-0' fluid>
            <div className='main-landing-footer'>
            <Row className='m-0 p-0 pb-5 footer-row'>
                <Col className='col-xl-5 col-12 m-0 p-0 p-xl-5'>
                    <Col className='box-container'>
                        <Col className='box-title'>Digital Traffic Makers
                        </Col>
                        <Col className='box-des'>How can we help you out? Reach out to us and we'll contact you as soon as possible.
                        </Col>
                        <Col className='box-des'>building 2108, Bayswater Tower, Business bay, Dubai - UAE
                        </Col>
                        <ContactContainers title="Phone" value="+971 45 686 290"/>
                        <ContactContainers title="Email" value="media@digitaltrafficmakers.com"/>
                        <Col className='d-flex align-items-center justify-content-center pt-3'>
                        <Row className='col-xl-6 col-12'>
                            <Col><FaFacebookF/>
                            </Col>
                            <Col><FaInstagram/>
                            </Col>
                            <Col><FaLinkedin/>
                            </Col>
                            </Row>
                            </Col>
                    </Col>
                </Col>
                <Col className='col-xl-7 col-12 m-0 p-0'>
                    <Row className='m-0 p-0'>
                    {/* <Col className='col-xl-6 col-12 pt-2'>
                        <Col className='side-title'>Work inquiries
                        </Col>
                        <Col className='side-des'>Interested in working with us?
                        </Col>
                        <Col className='side-des'>careers@glmaagency.com
                        
                        </Col>
                        </Col> */}
                        <Col className='col-xl-6 col-12 pt-xl-5'>
                        <Col className='side-title'>Sign up for the newsletter
                        </Col>
                        <Col className='side-des'>Be one of the first customers to know about our promos and special offers.
                        </Col>
                        </Col>
                        </Row>
                </Col>
                </Row>
                <Col className='d-flex align-items-center justify-content-center pt-3 text-footer-color'>© Copyright Digital Traffic Makers. All Rights Reserved
                </Col>
                </div>
            </Container>

    )
}

export default LandingFooter;

const ContactContainers=(props)=>{
return(
    <Col className=''>
    <Row  className='d-flex align-items-center justify-content-start'>
        <Col className="title-style col-xl-auto col-12">{props.title}:
        
        </Col>
        <Col className="value-style col-auto">{props.value}</Col>
        </Row>
    </Col>
)
}

