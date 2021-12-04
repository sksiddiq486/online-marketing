import React from 'react';
import './ImagesCompo.css';
import { Container, Row, Col } from "react-bootstrap";
import {Button,TextField} from '@mui/material';

const ImagesCompo=(props)=>{
    return(
        <Container className='main-cont pb-5' fluid>
            <Col className='second-col'>
            <Col className='col-xl-10 col-12'>
            <Row className='d-flex align-items-center'>
                <Col className='contact-text col-auto'>
                PORTFOLIO 
                </Col>
                <Col style={{height:'1px',backgroundColor:'black'}} className='col-2'></Col>
                </Row>
                <Col className='main-title'>
                FEATURED PROJECTS
                </Col>
                </Col>
                </Col>
                <Col className='second-col'>
            <Row className='col-xl-10 col-12'>
                <IndividualImage 
                image='/assets/images/project1.png' 
                description={'Post Designing'}
                />
                                <IndividualImage 
                image='/assets/images/project2.png' 
                description={'Post Designing'}
                />
                                <IndividualImage 
                image='/assets/images/project3.png' 
                description={'Post Designing'}
                />
             <IndividualImage 
                image='/assets/images/project4.png' 
                description={'Post Designing'}
                />
                <IndividualImage 
                image='/assets/images/project5.png' 
                description={'Post Designing'}
                />
                <IndividualImage 
                image='/assets/images/project6.jpg' 
                description={'Post Designing'}
                />
                {/* <IndividualImage 
                image='https://images.pexels.com/photos/6483579/pexels-photo-6483579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
                description={'Post Designing'}
                />
                <IndividualImage 
                image='https://images.pexels.com/photos/6483579/pexels-photo-6483579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
                description={'Post Designing'}
                /> */}
                </Row>
                </Col>
            </Container>

    )
}

export default ImagesCompo;

const IndividualImage=(props)=>{
    return(
        <Col className='col-xl-3 p-xl-2 col-12 pb-3'>  
      <img src={props.image} className='imgs'/>  
       </Col>
    )
}