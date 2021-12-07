import React from 'react';
import './CardCompo.css';
import { Container, Row, Col } from "react-bootstrap";
import {Button,TextField} from '@mui/material';

const CardCompo = ()=>{
    return(
        <Container className='main-card-cont' fluid>
            <Col className='col-xl-10 col-12 p-0 m-0'>
                <Row className='col-xl-12 d-flex align-items-center justify-content-center p-0 m-0'>
                 <CustomCard number={'15'} title={'Succeeded Projects'} img={'/assets/images/succed1.png'}/>
                 <CustomCard number={'426'} title={'Working Hours Spent'} img={'/assets/images/succed2.png'}/>
                 <CustomCard number={'15'} title={'Websites Developed'} img={'/assets/images/succed3.png'}/>
                 <CustomCard number={'9'} title={'Platforms Mastered'} img={'/assets/images/succed4.png'}/>
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
                <img src={props.img}
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