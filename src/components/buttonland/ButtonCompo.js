import React from 'react';
import './ButtonCompo.css';
import { Container, Row, Col } from "react-bootstrap";
import {Button,TextField} from '@mui/material';

const ButtonCompo=(props)=>{
    return(
        <Container className='main-cont' fluid>
            <Col className='second-col'>
            <Col className='col-xl-10 col-12'>
                <Row className='d-flex align-items-center'>
                <Col className='contact-text col-auto'>
                {props.title} 
                </Col>
                <Col style={{height:'1px',backgroundColor:'black'}} className='col-2'></Col>
                </Row>
                <Col className='main-title'>
                {props.subtitle}
                </Col>
                </Col>
                </Col>
                <Col className='second-col'>
            <Row className='col-xl-10 col-12'>
                {props.data.map((item,i)=>{
                    return(
                        <IndividualButton 
                        image='https://images.pexels.com/photos/6483579/pexels-photo-6483579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
                        description={item.title}
                        />
                    )
                })}
                </Row>
                </Col>
            </Container>

    )
}

export default ButtonCompo;

const IndividualButton=(props)=>{
    return(
        <Col className='col-xl-3 p-xl-3 col-12 pb-3'>
        <Row className='button-row'>
       <Col className='col-2'>
      <img src={props.image} className='button-imgs'/>
       </Col>
       <Col className='col-10 button-des'>{props.description}
       </Col>
       </Row>
       </Col>
    )
}