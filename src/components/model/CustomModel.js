import React, { useEffect, useState } from "react";
import {Modal,Box,Typography,Button,TextField} from '@mui/material';
import './CustomModel.css';
import { Container, Row, Col } from "react-bootstrap";
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";


const CustomModel=()=>{
    const [visible, setVisible] = useState(false);
    const history = useHistory();

    useEffect(()=>{
       setTimeout(()=>{
        setVisible(true);
       },2000)
    },[])

    const sendEmail = (e) => {
        e.preventDefault();
        setVisible(false);
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
        <Modal
  open={visible}
//   onClose={handleClose}

  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <div className='popup-main-div'>
      <div className='close-div'><AiOutlineClose onClick={()=>setVisible(false)}/></div>
  <Col className="col-xl-12 col-md-6 col-12 p-0 m-0">
          <Col className="popup-form">
            <form onSubmit={sendEmail}>
            <InputField label="NAME" name={'name'}/>
            <InputField label="EMAIL" name={'email'}/>
            <InputField label="PHONE" name={'phone'}/>
            <InputField label="MESSAGE" name={'message'}/>
              <Col className="popup-note-text">
              We are cautious about your privacy. Volga Tigris Digital Marketing
              Agency uses the information you provide to us to contact you about
              our relevant content, products, and services. You can unsubscribe
              from these communications at any time, if you wish to. For more
              information, check out our{" "}
              <span className="text-warning">Privacy Policy</span>.
            </Col>
              <Col className='d-flex justify-content-end pt-4'>
              <Button variant="outlined" className="outlined-button" type='submit'>
                Submit
              </Button>
              </Col>
              </form>
          </Col>
        </Col>
  </div>
 
</Modal>

    )
}

export default CustomModel;

const InputField = (props) => {
    return (
      <div style={{ paddingBottom: "10px" }}>
        <TextField id="standard-basics" label={props.label} variant="standard" name={props.name}/>
      </div>
    );
  };