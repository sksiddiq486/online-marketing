import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./InfoForms.css";
import { Button, TextField } from "@mui/material";
import emailjs from 'emailjs-com';
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedin,
//   ImLinkedin2,
// } from "react-icons/fa";
import { useHistory } from 'react-router-dom';

const addressess = [
  {
    id: 1,
    buttonTitle: "Dubai",
    title: "Dubai Office",
    add1: "2108",
    add2: "Business Bay",
    add3: "Dubai",
    add4: "UAE",
  },
  // {
  //   id: 2,
  //   buttonTitle: "Sharjah",
  //   title: "SHARJAH OFFICE",
  //   add1: "Gulf Sky Building",
  //   add2: "Office No : 415",
  //   add3: "Sharjah",
  //   add4: "",
  // },
];

const InfoForms = (props) => {
  const [index, setIndex] = useState(0);

  const history = useHistory();

  const indexFun = (i) => {
    setIndex(i);
  };

  const linkClick = (e, link) => {
    e.preventDefault();
    window.open(link);
  };

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


  return (
    <Container className="forms" fluid>
      <Row className="p-5">
        <Col className="col-xl-6 col-md-6 col-12">
          <Col>— WORK WITH US</Col>
          <Col className="meet-title">
            Let’s team up and build something great.
          </Col>
          <Col className="off-title">Offices</Col>
          <Row className="pb-3">
            {addressess.map((item, i) => {
              return (
                <div
                  className={`${
                    index == i ? "col-auto p-0 border-div" : "col-auto p-0"
                  }`}
                >
                  <Button onClick={() => indexFun(i)}>
                    <div className="border-button">{item.buttonTitle}</div>
                  </Button>
                </div>
              );
            })}
          </Row>
          <Col className="pb-1">{addressess[index].title}</Col>
          <Col className="address-fields">{addressess[index].add1}</Col>
          <Col className="address-fields">{addressess[index].add2}</Col>
          <Col className="address-fields">{addressess[index].add3}</Col>
          <Col className="pt-4">
            <Row className="pb-2">
              <Col>
              <Col className="col-auto form-info-title">LETS CONNECT</Col>
              <Col className="col-auto form-info-value">media@digitaltrafficmakers.com</Col>
              </Col>
            <Col>
            <Col className="form-info-title">CALL US AT</Col>
              <Col className="form-info-value">+971 45 686 290</Col>
              </Col>
            </Row>
          </Col>
          <Col className="form-info-title">FOLLOW US ON</Col>
          <Row className="p-3">
            <Col className="col-auto p-1">
              {/* <FaInstagram /> */}
              <img
            src="/assets/images/INSTA.png"
            className="logo"
            alt="loading"
            style={{ height: "20px", width: "20px" }}
            onClick={(e) =>
              linkClick(e, "https://www.instagram.com/digitaltrafficmakers/")
            }
          />
            </Col>
            <Col className="col-auto p-1">
              {/* <FaFacebookF /> */}
              <img
            src="/assets/images/FB.png"
            className="logo"
            alt="loading"
            style={{ height: "20px", width: "20px" }}
            onClick={(e) =>
              linkClick(e, "https://www.facebook.com/digitaltrafficmakers")
            }
          />
            </Col>
            <Col className="col-auto p-1">
              <img
            src="/assets/images/PINT.png"
            className="logo"
            alt="loading"
            style={{ height: "20px", width: "20px" }}
            onClick={(e) =>
              linkClick(e, "https://www.pinterest.com/dtrafficmakers")
            }
          />
            </Col>
            <Col className="col-auto p-1">
            <img
            src="/assets/images/LINK.png"
            className="logo"
            alt="loading"
            style={{ height: "20px", width: "20px" }}
            onClick={(e) =>
              linkClick(
                e,
                "https://www.linkedin.com/company/digital-traffic-makers"
              )
            }
          />
            </Col>
          </Row>
        </Col>
        <Col className="col-xl-6 col-md-6 col-12">
          <Col className="form">
            <form onSubmit={sendEmail}>
            <InputField label="NAME" name={'name'}/>
            <InputField label="EMAIL" name={'email'}/>
            <InputField label="PHONE" name={'phone'}/>
            <InputField label="MESSAGE" name={'message'}/>
              <Col className="note-text">
              We are cautious about your privacy. Digital Traffic Makers
              uses the information you provide to us to contact you about
              our relevant content, products, and services. You can unsubscribe
              from these communications at any time, if you wish to. For more
              information, check out our{" "}
              <span className="text-warning">Privacy Policy</span>.
            </Col>
              <Col className='d-flex justify-content-end'>
              <Button variant="outlined" className="outlined-button" type='submit'>
                Submit
              </Button>
              </Col>
              </form>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoForms;

const InputField = (props) => {
  return (
    <div style={{ paddingBottom: "10px" }}>
      <TextField id="standard-basic" label={props.label} variant="standard" name={props.name}/>
    </div>
  );
};
