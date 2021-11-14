import React from 'react';
import {
    Container,
    Row,
    Col
} from "react-bootstrap";
import Footer from '../../components/footerNav/Footer';
import './BlogDescription.css';

const BlogDescription=()=>{
    return(
        <Container className="p-0 m-0" fluid>
            <Col>
            <img src='https://www.element8.ae/e8-content/uploads/2019/02/realestatenew.jpg' className='des-img'/>
            </Col>
            <Col className='card-col'>
             <Document/>
            </Col>
            <Footer/>
            </Container>

    )
}

export default BlogDescription;


const Document=()=>{
    return(
        <div className='doc-page card'>
        <Col className='doc-title pb-3'>Top Real Estate Websites of 2021</Col>
        <Col className='pb-3'>
        Digital presence, showcased through an intuitive, responsive and engaging website, has never been more important. The more competitive your industry, the more important your website become
        </Col>
        <Col className='pb-3'>Dubai’s real estate market is unlike anywhere else in the world. There are over 700 real estate agencies in Dubai. What’s more, with forecasters predicting a tough year ahead for the industry with oversupply and a slowdown in the economy, there’s no doubting that this is a competitive market.
        </Col>
        <Col className='pb-3'>That’s why many property agencies in Dubai are choosing now to think about a new and more engaging website as a way to weather the storm. Here we look at our top 5 leading property web solutions in Dubai and what we think works with their website.
        </Col>
        <CardContents
        title="1. Emaar"
        image="https://www.element8.ae/e8-content/uploads/2019/02/Screen-Shot-2019-02-07-at-5.26.18-PM.png"
        des="With a striking contemporary style and a clear simple layout, EMAAR’s website is attractive and engaging. The site is easy to navigate and does a good job of focusing on its most important feature: the properties themselves. Featured properties are showcased well and the use of the popular scrolling page style is used effectively within listings."
        />
         <CardContents
        title="2. Emirate’s National Investment"
        image="https://www.element8.ae/e8-content/uploads/2019/02/Eni.jpg"
        des="Emirate’s National Investment, or ENI, has a beautiful and creatively designed website which stands apart from the crowd. Along with seamless functionality, the imagery is outstanding. Being a property investment company, the high-class feel is clearly important and is executed well. On-Page SEO is integrated expertly and there is a good balance of informative content."
        />
         <CardContents
        title="3. Azco Real Estate LLC"
        image="https://www.element8.ae/e8-content/uploads/2021/06/azco-real-estate.jpg"
        des="Azco Real Estate LLC. is an award winning and culturally diverse brokerage that brings together a team of multilingual and highly qualified real estate brokers. AZCO utilises extensive expertise of the local market and internationalism of real estate. AZCO, exercises a client centred approach that helps them to deliver end-to-end property management and real estate solutions."
        />
    </div>
    )
}

const CardContents=(props)=>{
    return(
        <Col className='pt-5'>
        <Col className='cardcontent-title pb-2'>{props.title}
        </Col>
        <Col>
        <img src={props.image} style={{width:'100%'}}/>
        </Col>
        <Col className='pt-2'>{props.des}
        </Col>
        </Col>
    )
}