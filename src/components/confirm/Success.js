import React, { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Success.css';
import { useHistory } from 'react-router-dom';


const Success=()=>{
    const history = useHistory();
    useEffect(()=>{
       setTimeout(()=>{
        history.goBack();
       },2000)
    },[])
    return(
        <Container className='d-flex align-items-center justify-content-center' fluid>
            <Col className='col-4'>
            <Col className='d-flex align-items-center justify-content-center'>
            <img src="https://freepngimg.com/thumb/green_tick/27882-1-green-tick-free-download-thumb.png"/>
            </Col>
            <Col className="success-text">Your details submitted successfully</Col>
            </Col>
            </Container>

    )
}


export default Success;