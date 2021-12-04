import React, { useEffect,useRef } from 'react';
import './LandingScreen.css';
import { Container, Row, Col } from "react-bootstrap";
import {Button,TextField} from '@mui/material';
import ButtonCompo from '../../components/buttonland/ButtonCompo';
import CardCompo from '../../components/cardfolder/CardCompo';
import LeftSpecialContainer from '../../components/leftcontainer/LeftSpecialContainer';
import ImagesCompo from '../../components/imagesland/ImagesCompo';
import ClientsCompo from '../../components/clientsland/ClientsCompo';
import LandingFooter from '../../components/footerfolder/LandingFooter';
import LandingContact from '../../components/landingcontact/LandingContact';
import LandingHeader from '../../components/landingheader/LandingHeader';
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router-dom';
import { FiCheck } from "react-icons/fi";

const LandingScreen=()=>{
  const history = useHistory();
  const divRef = useRef()

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8r8znxi', 'template_bdww2q4', e.target, 'user_gj54AgmKCjEJb8gnClg9N')
          .then((result) => {
              console.log(result.text, 'resultttttt');
              if(result.text == 'OK'){
                history.push("/success");
              }
          }, (error) => {
              console.log(error.text,'errrr');
          });
      };
    return(
        <Container className='p-0 m-0' fluid>
          <div 
          className='landingscreen-div'
          >
          {/* <LandingHeader/> */}
            <ImageBanner divRef={divRef}/>
            <ContactForm sendEmail={sendEmail} divRef={divRef}/>
            <LeftImageTitleContainer/>
            <ButtonCompo title={'FEATURE'} subtitle={'SOCIAL MEDIA FEATURES'} 
            data={[
              {
                id:1,
                img:'/assets/images/icon1.png',
                title:'Post Designing'
              },
              {
                id:2,
                img:'/assets/images/icon2.png',
                title:'Quality Hashtags'
              },
              {
                id:3,
                img:'/assets/images/icon3.png',
                title:'Social media calendar'
              },
              {
                id:4,
                img:'/assets/images/icon4.png',
                title:'Multilingual post'
              },
              {
                id:5,
                img:'/assets/images/icon5.png',
                title:'Daily Management'
              },
              {
                id:6,
                img:'/assets/images/icon6.png',
                title:'Client Engagement'
              },
              {
                id:7,
                img:'/assets/images/icon7.png',
                title:'Viral Trends'
              },
              {
                id:8,
                img:'/assets/images/icon8.png',
                title:'Competitor’s tracking'
              }
            ]}
            />
            <CardCompo/>
            <LeftSpecialContainer/>
            <ButtonCompo title={'FEATURE'} subtitle={'FEATURES OF BRANDING'} 
            data={[
              {
                id:1,
                img:'/assets/images/icon9.png',
                title:`Brand's Credability`
              },
              {
                id:2,
                img:'/assets/images/icon10.png',
                title:'Product Identity'
              },
              {
                id:3,
                img:'/assets/images/icon11.png',
                title:'User Loyality'
              },
              {
                id:4,
                img:'/assets/images/icon12.png',
                title:'Customer Intent'
              },
              
            ]}
            />
            <RightImageContainer 
            title={'Specialized in Search Engine Marketing:'} 
            img={'/assets/images/landingpage4.jpg'}
            des={'Google Advertising can be a crucial source of traffic for any business. Make sure your customers can find you where they are looking for products and services – in Google search. From social strategy to implementations, your business will be on its way to boosting brand awareness, connecting with your customers, and generating revenue.'}
            des1={'Google Search Ads, Google Display Ads, Video ads in all targeting areas will target to generate the quality leads for your business.'}
            />
            <ButtonCompo title={'FEATURE'} subtitle={'SEM FEATURES'} 
            data={[
              {
                id:1,
                img:'/assets/images/icon13.png',
                title:'Search Ads'
              },
              {
                id:2,
                img:'/assets/images/icon14.png',
                title:'Display Ads'
              },
              {
                id:3,
                img:'/assets/images/icon15.png',
                title:'Lead Generation'
              },
              {
                id:4,
                img:'/assets/images/icon16.png',
                title:'Shopping Ads'
              },
              {
                id:5,
                img:'/assets/images/icon17.png',
                title:'Video Ads'
              },
              {
                id:6,
                img:'/assets/images/icon18.png',
                title:'App Promotional Ads'
              }
            ]}
            />
             <LeftImageContainer 
             img={'/assets/images/landingpage5.jpg'} 
             title={'Well verse in handling the Search Engine Optimization Services:'} 
             des={'Digital Traffic Makers diligently research both your business and its competitors and then determine which steps need to be taken in order to maximize your business’s search results. The research and the audit, both together help us to form an SEO strategy that is ideal for your unique website/business. SEO has a major impact in everything from traffic to sales. Avatar Studios proffer bespoke (Search Engine Optimization) SEO services in Bangalore to gain more traction to your business. Our in-house experts craft tailored campaigns to generate more traffic by analyzing your digital assets and competitor platform whilst being budget centric.'}
             des1={''}
             />
             <ButtonCompo title={'FEATURE'} subtitle={'SEO FEATURES'} 
            data={[
              {
                id:1,
                img:'/assets/images/icon19.png',
                title:'Off Page'
              },
              {
                id:2,
                img:'/assets/images/icon20.png',
                title:'On Page'
              },
              {
                id:3,
                img:'/assets/images/icon21.png',
                title:'Technical SEO'
              },
              {
                id:4,
                img:'/assets/images/icon22.png',
                title:'Local SEO'
              },
              {
                id:5,
                img:'/assets/images/icon23.png',
                title:'Targeting Keywords'
              },
              {
                id:6,
                img:'/assets/images/icon24.png',
                title:'Long Tail Keywords'
              },
              {
                id:7,
                img:'/assets/images/icon25.png',
                title:'Content SEO'
              },
              {
                id:8,
                img:'/assets/images/icon26.png',
                title:'Image Alt Tags'
              }
            ]}
            />
             {/* <RightImageContainer 
            title={'Community Management'} 
            img={'https://images.pexels.com/photos/6483579/pexels-photo-6483579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
            des={'Social media is the easiest, most efficient way for prospective customers to reach your brand to send a message, feedback, or a general inquiry, and your response time counts as it greatly reflects on how the brand cares for its customers. We handle responding to these queries, as well as reacts, and ensure that messages are responded to in the shortest time possible.'}
            /> */}
            <ImagesCompo />
            <ClientsCompo/>
            <LandingContact/>
            <LandingFooter/>
            </div>
            </Container>

    )
}

export default LandingScreen;

const ImageBanner=(props)=>{
    return(
        <Row className='banner-col p-xl-5 p-sm-3'>
           <Col className='d-xl-none d-block'>
             <div className='sideimg-col'>
            <img src='/assets/images/landingpage1.jpg' alt='img' style={{height:'90%',width:'90%'}}/>
                </div>
                </Col>
            <Col className='col-xl-6 col-12 d-flex align-items-center justify-content-center'>
                <Col className='col-xl-11 col-12'>
                  <div className='content-landing-div'>
                <Col className='banner-title'>Digital Marketing Service by DTM That Guarantee Results
                </Col>
                <Col className='banner-subtitle'>Do you want to outsource some of your digital marketing channels? Do you need to get extra leads, customers or conversions? We are here to assist.
                </Col>
                <Col className='pt-3 p-0 quote-button-div'>
                <Button variant="contained" style={{backgroundColor:'black'}} onClick={()=>{ 
                  const { offsetTop } = props.divRef.current
                  window.scrollTo(0, offsetTop-50)
                  }}>Get a Quote</Button>
                </Col>
                </div>
                </Col>
            </Col>
            <Col className='col-xl-6 col-12'>
            <Col className='sideimg-col d-none d-xl-block'>
            <img src='/assets/images/landingpage1.jpg' alt='img' style={{height:'90%',width:'90%'}}/>
                </Col>
            </Col>
        </Row>
    )
}

const ContactForm=(props)=>{
    return(
      <div className='form-row' ref={props.divRef}>
        <Row>
            <Col className='col-xl-6 col-12 p-sm-3 p-xl-0'>
              <Row className='d-flex align-items-center'>
                <Col className='contact-text col-auto'>
                CONTACT
                </Col>
                <Col style={{height:'1px',backgroundColor:'black'}} className='col-2'></Col>
                </Row>
                <Col className='main-title'>
                WHY WORK WITH US?
                </Col>
                <Col className='des-text pt-3'>
                  <span style={{paddingRight:'10px'}}><FiCheck/></span>
                Whether you need a help with specific channel such as Facebook or Google Advertising or with setting up an overall marketing strategy, we will always focus handling over real outcomes in your commercial enterprise.
                </Col>
                {/* <Col className='des-text'>Attractive visuals and bilingual content writing with quality keywords are what comprises the social media calendar
                </Col> */}
                <Col className='des-text'><span style={{paddingRight:'10px'}}><FiCheck/></span>Our social media strategy involves daily management and user engagement that builds trust between you and your customers
                </Col>
            </Col>
            <Col className='col-xl-6 col-12  form-col'>
              <form onSubmit={props.sendEmail}>
                <Col  className=""> 
            <Row className='row-col'>
                <Col className='col-xl-6 col-12 phone-col'><TextField id="outlined-basic" label="Your Name" variant="outlined" className='text-field2' name={'name'}/>
                </Col>
                <Col className='col-xl-6 col-12 phone-col'><TextField id="outlined-basic" label="Your Phone" variant="outlined" className='text-field2' name={'phone'}/>
                </Col>
                </Row>
                <Col className='pt-3 p-0'><TextField id="outlined-basic" label="Your Email" variant="outlined" className='text-field' name={'email'}/>
                </Col>
                <Col className='pt-3 p-0'>
                <TextField
          id="outlined-multiline-static"
          label="Message"
          className='text-area'
          multiline
          rows={4}
          name={'message'}
        />
        </Col>
        <Col className='pt-3 p-0 d-flex align-items-center justify-content-center'>
                <Button variant="contained" style={{backgroundColor:'black'}} type='submit'>Send message</Button>
                </Col>
                </Col>
                </form>
            </Col>
            </Row>
            </div>
    )
}

const RightImageContainer = (props) => {
    return (
      <Container className='m-0 p-0' fluid>
        <div className="right-main-div">
          <Row className='p-0 m-0'>
          <Col className="col-xl-6 col-md-6 col-12 d-xl-none d-block">
              <img src={props.img} className='left-image'/>
            </Col>
            <Col className="col-xl-6 col-md-6 col-12">
              <Col className="left-content-title">
                {props.title}
              </Col>
              <Col className="pt-1">
                {props.des}
              </Col>
              <Col className="pt-3">
                {props.des1}
              </Col>
            </Col>
            <Col className="col-xl-6 col-md-6 col-12 d-xl-block d-none">
              <img src={props.img} className='left-image'/>
            </Col>
          </Row>
        </div>
      </Container>
    );
  };

  const LeftImageTitleContainer = () => {
    return (
      <Container fluid>
        <div className="p-2">
          <Row>
            <Col className="col-xl-6 col-md-6 col-12 img-col d-flex align-items-center justify-content-center">
              <img src="/assets/images/landingpage3.jpg" className='left-image'/>
            </Col>
            <Col className="col-xl-6 col-md-6 col-12">
              <Col className="left-content-title">
              The best Social Media Marketing Service in Dubai:
              </Col>
              <Col>
              There are 9 million people in the UAE using Facebook and Instagram on a every day. They are not only the most popular social medium networks but also one of the most important marketing channels for businesses of all sizes. Both Facebook and Instagram allow everyone to reach their users via paid advertising in social Media Channels. But how to do it right? Digital traffic Makers are here to provide the all social Media marketing services with best sales driven advertising with good ROI.
              </Col>
              <Col className='left-content-subtitle'>Remarketing strategies
              </Col>
              <Col className="pb-2 pt-1">
              90% greater lead-to-close rate than other digital marketing methods
              </Col>
              <Col className='left-content-subtitle'>Brand Awareness
              </Col>
              <Col className="pb-2 pt-1">
              Tap into new online audiences and maintain existing followers
              </Col>
              <Col className='left-content-subtitle'>Social Media Presence
              </Col>
              <Col className="pb-2 pt-1">
              Differentiate your brand with others by unique tactics that keep your audience engaged
              </Col>
            </Col>
          </Row>
        </div>
      </Container>
    );
  };

  const LeftImageContainer = (props) => {
    return (
      <Container fluid>
        <div className="p-2">
          <Row>
            <Col className="col-xl-6 col-md-6 col-12 img-col d-flex align-items-center justify-content-center">
              <img src={props.img} className='left-image'/>
            </Col>
            <Col className="col-xl-6 col-md-6 col-12">
              <Col className="left-content-title">
              {props.title}
              </Col>
              <Col>
              {props.des}
              </Col>
              {/* <Col className='left-content-subtitle'>High conversion rate
              </Col>
              <Col className="pb-2 pt-1">
              90% greater lead-to-close rate than other digital marketing methods
              </Col>
              <Col className='left-content-subtitle'>Client relationships
              </Col>
              <Col className="pb-2 pt-1">
              Tap into new online audiences and maintain existing followers
              </Col>
              <Col className='left-content-subtitle'>Stand out
              </Col>
              <Col className="pb-2 pt-1">
              Differentiate your brand with others by unique tactics that keep your audience engaged
              </Col> */}
            </Col>
          </Row>
        </div>
      </Container>
    );
  };
  