import React from 'react';
import './CardCompo.css';
import { Container, Row, Col } from "react-bootstrap";
import {Button,TextField} from '@mui/material';

const CardCompo = ()=>{
    return(
        <Container className='main-card-cont' fluid>
            <Col className='col-xl-10 col-12 p-0 m-0'>
                <Row className='col-xl-12 d-flex align-items-center justify-content-center p-0 m-0'>
                 <CustomCard number={'487'} title={'Succeeded Projects'}/>
                 <CustomCard number={'69978'} title={'Working Hours Spent'}/>
                 <CustomCard number={'102'} title={'Websites Developed'}/>
                 <CustomCard number={'9'} title={'Platforms Mastered'}/>
                    </Row>
            </Col>
            </Container>
    )
}

export default CardCompo;

const CustomCard=(props)=>{
    return(
        <Col className='col-xl-3 col-12 main-cards-col'>
        <Col className='cards-col'>
        <Col className='d-flex align-items-center justify-content-center'>
            <div className='round-div'>
                <img src="https://images.pexels.com/photos/6483579/pexels-photo-6483579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                style={{height:"20px",width:"20px"}}
                />
                </div>
                </Col>
            <Col className='d-flex align-items-center justify-content-center card-number'>{props.number}
            </Col>
            <Col className='d-flex align-items-center justify-content-center card-des'>{props.title}
            </Col>
        </Col>
      </Col>
    )
}