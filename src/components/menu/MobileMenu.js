import React,{useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './MobileMenu.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const MobileMenu=(props)=>{
    const [show, setShow] = useState(false);
    return(
        <Container className='total-container' fluid>
            <div>
            <Col className='text' onClick={props.onClick}>
            <Link to="/home" 
            className="link-text"
            >
            HOME
            </Link>
            </Col>
            <Col className='text'onClick={props.onClick}>
            <Link to="/aboutus" className="link-text">
            ABOUT US
            </Link>
            </Col>
            <Col className='text' onClick={()=>setShow(!show)}>
            SERVICES
            {show?(
            <div>
                <Col className='sub-text'onClick={props.onClick}>
                    <Link to="/social" className="sublink-text">
                    SEARCH ENGINE MARKETING
                    </Link>
                    </Col>
                <Col className='sub-text'onClick={props.onClick}>
                    <Link to="/social" className="sublink-text">
                    SOCIAL MEDIA MARKETING
                    </Link>
                    </Col>
                <Col className='sub-text'onClick={props.onClick}>
                    <Link to="/social" className="sublink-text">
                    SEARCH ENGINE OPTIMIZATION
                    </Link>
                    </Col>
                <Col className='sub-text'onClick={props.onClick}>
                    <Link to="/social" className="sublink-text">
                    EMAIL MARKETING
                    </Link>
                    </Col>
                </div>):null}
            </Col>
            <Col className='text'onClick={props.onClick}>
            <Link to='/blog' className="link-text">
            BLOGS
            </Link>
            </Col>
            <Col className='text'onClick={props.onClick}>
            <Link to="/contact" className="link-text">
            CONTACT US
            </Link>
            </Col>
            </div>
            </Container>

    )
}

export default MobileMenu;