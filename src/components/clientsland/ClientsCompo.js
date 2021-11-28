import React from 'react';
import './ClientsCompo.css';
import { Container, Row, Col } from "react-bootstrap";
import {Button,TextField} from '@mui/material';

const ClientsCompo=(props)=>{
    return(
        <Container className='main-client-cont' fluid>
            <Col className='second-col'>
            <Col className='col-xl-10 col-12'>
            <Row className='d-flex align-items-center'>
                <Col className='clients-text col-auto'>
                CLIENTS 
                </Col>
                <Col style={{height:'1px',backgroundColor:'#ffffff'}} className='col-2'></Col>
                </Row>
                <Col className='clients-title'>
                OUR CLIENTS
                </Col>
                </Col>
                </Col>
                <Col className='second-col'>
            <Row className='col-xl-10 col-12 m-0'>
                <IndividualButton 
                image='https://images.pexels.com/photos/6483579/pexels-photo-6483579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
                description={'Post Designing'}
                />
                 <IndividualButton 
                image='https://images.pexels.com/photos/6483579/pexels-photo-6483579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
                description={'Post Designing'}
                />
                <IndividualButton 
                image='https://images.pexels.com/photos/6483579/pexels-photo-6483579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
                description={'Post Designing'}
                />
             <IndividualButton 
                image='https://images.pexels.com/photos/6483579/pexels-photo-6483579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
                description={'Post Designing'}
                />
                <IndividualButton 
                image='https://images.pexels.com/photos/6483579/pexels-photo-6483579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
                description={'Post Designing'}
                />
                <IndividualButton 
                image='https://images.pexels.com/photos/6483579/pexels-photo-6483579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
                description={'Post Designing'}
                />
                <IndividualButton 
                image='https://images.pexels.com/photos/6483579/pexels-photo-6483579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
                description={'Post Designing'}
                />
                <IndividualButton 
                image='https://images.pexels.com/photos/6483579/pexels-photo-6483579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
                description={'Post Designing'}
                />
                </Row>
                </Col>
            </Container>

    )
}

export default ClientsCompo;

const IndividualButton=(props)=>{
    return(
        <Col className='col-xl-2 p-xl-1 col-6 pb-3'>
      <img src={props.image} className='client-imgs'/>
       </Col>
    )
}