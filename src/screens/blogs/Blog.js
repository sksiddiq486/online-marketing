import React from 'react';
import './Blog.css';
import {
    Container,
    Row,
    Col
} from "react-bootstrap";
import Footer from '../../components/footerNav/Footer';
import InfoForms from '../../components/forms/InfoForms';
import { useHistory } from 'react-router-dom';


const blogData=[
    {
        id:1,
        img:'https://www.element8.ae/e8-content/uploads/2018/12/billboard.png',
        title:'How You Can Improve Your Workflow with Human - Centric Web Design',
        des:'In the web design industry, we often hear the terms“ user - centric” and“ human - centric”, but at times, both developers and designers think that they mean the same thing.Most professionals look to include a user - centered design which revolves around end - users and...'
    },
    {
        id:2,
        img:'https://www.element8.ae/e8-content/uploads/2019/02/realestatenew.jpg',
        title:'How You Can Improve Your Workflow with Human - Centric Web Design',
        des:'In the web design industry, we often hear the terms“ user - centric” and“ human - centric”, but at times, both developers and designers think that they mean the same thing.Most professionals look to include a user - centered design which revolves around end - users and...'
    },
    {
        id:3,
        img:'https://www.element8.ae/e8-content/uploads/2021/10/BANNER-1.jpg',
        title:'How You Can Improve Your Workflow with Human - Centric Web Design',
        des:'In the web design industry, we often hear the terms“ user - centric” and“ human - centric”, but at times, both developers and designers think that they mean the same thing.Most professionals look to include a user - centered design which revolves around end - users and...'
    },
    {
        id:4,
        img:'https://www.element8.ae/e8-content/uploads/2021/10/BANNER.jpg',
        title:'How You Can Improve Your Workflow with Human - Centric Web Design',
        des:'In the web design industry, we often hear the terms“ user - centric” and“ human - centric”, but at times, both developers and designers think that they mean the same thing.Most professionals look to include a user - centered design which revolves around end - users and...'
    },
    {
        id:5,
        img:'https://www.element8.ae/e8-content/uploads/2018/12/billboard.png',
        title:'How You Can Improve Your Workflow with Human - Centric Web Design',
        des:'In the web design industry, we often hear the terms“ user - centric” and“ human - centric”, but at times, both developers and designers think that they mean the same thing.Most professionals look to include a user - centered design which revolves around end - users and...'
    },
    {
        id:6,
        img:'https://www.element8.ae/e8-content/uploads/2018/12/billboard.png',
        title:'How You Can Improve Your Workflow with Human - Centric Web Design',
        des:'In the web design industry, we often hear the terms“ user - centric” and“ human - centric”, but at times, both developers and designers think that they mean the same thing.Most professionals look to include a user - centered design which revolves around end - users and...'
    },
]


const Blog = () => {
    return (
        <Container className = 'p-0 m-0' fluid>
        <Col className = 'main-container d-flex align-items-center justify-content-center' >
        <Col className = 'blog-text' > Blog
        </Col>
        </Col>
        <BlogContainer />
        <InfoForms/>
        <Footer/>
        </Container>

    )
}

export default Blog;

const BlogContainer = () => {
    const history = useHistory();
    return (
    <Container className='pt-3 pb-3' fluid>
        <Row>
            {blogData.map((item,i)=>{
                return(
                    <Col className='col-xl-4 pt-4 single-blog col-sm-6 col-6'>
                    <Col>
                    <img src = {item.img} className='blog-img' onClick={()=>history.push('/blogdescription')}/>
                    </Col>
                    <Col className='blog-title'> {item.title} </Col>
                    <div>
                    {item.des}
                     </div>
                     </Col>
                )
            })}
          </Row>
          </Container>
    )
}