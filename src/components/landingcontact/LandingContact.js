import React from 'react';
import './LandingContact.css';
import { Container, Row, Col } from "react-bootstrap";
import {Button,TextField} from '@mui/material';
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router-dom';
import { IoLocationOutline,IoPhonePortraitOutline,IoMailOutline } from "react-icons/io5";
  
  


const LandingContact=(props)=>{
    const history = useHistory();

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
        <Row className='form-row p-xl-5 p-sm-3'>
            <Col className='col-xl-5 col-12'>
                <div className='first-part'>
                <Row className='d-flex align-items-center'>
                <Col className='contactus-text col-auto'>
                CONTACT 
                </Col>
                <Col style={{height:'1px',backgroundColor:'black'}} className='col-2'></Col>
                </Row>
                <Col className='main-title'>
                CONTACT US
                </Col>
                <InformationContainer 
                image={'https://images.pexels.com/photos/6483579/pexels-photo-6483579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
                title={'Location'}
                des={'building 2108, Bayswater Tower, Business bay, Dubai - UAE'}
                num={'1'}
                />
                <InformationContainer 
                image={'https://images.pexels.com/photos/6483579/pexels-photo-6483579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
                title={'Email'}
                des={'media@digitaltrafficmakers.com'}
                num={'2'}
                />
                <InformationContainer 
                image={'https://images.pexels.com/photos/6483579/pexels-photo-6483579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
                title={'Call'}
                des={'+971 45 686 290'}
                num={'3'}
                />
                </div>
            </Col>
            <Col className='col-xl-7 col-12 pb-4'>
            <form onSubmit={sendEmail}>
                <Col>
               
            <Row className='row-col'>
                <Col className='col-xl-6 col-12'><TextField id="outlined-basic" label="Your Name" variant="outlined" className='text-field2' name={'name'}/>
                </Col>
                <Col className='col-xl-6 col-12 phone-col'><TextField id="outlined-basic" label="Your Email" variant="outlined" className='text-field2' name={'email'}/>
                </Col>
                </Row>
                <Col className='pt-3 p-0'><TextField id="outlined-basic" label="Subject" variant="outlined" className='text-field' name={'phone'}/>
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
                <Button variant="contained" style={{backgroundColor:'black'}} type="submit">Send message</Button>
                </Col>
                </Col>
                </form>
            </Col>
            </Row>
    )
}

export default LandingContact;

const InformationContainer=(props)=>{
    return(
        <Col className='col-xl-11 p-xl-3 col-12 pb-3'>
        <Row className='button-contact-row'>
       <Col className='col-xl-2 col-3'>
           <div className='round-contact-div'>
               {props.num === '1'?(
      <IoLocationOutline/>):props.num === '2'?(<IoMailOutline/>):(<IoPhonePortraitOutline/>)}
      </div>
       </Col>
       <Col className='col-xl-10 button-contact-title col-9'>
           <Col>{props.title}:</Col>
           <Col className='button-contact-des'>{props.des}</Col>
       </Col>
       </Row>
       </Col>
    )
}