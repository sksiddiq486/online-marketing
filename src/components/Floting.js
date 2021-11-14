import React,{useState} from "react";
import "./Floating.css";
import { Container, Row, Col } from "react-bootstrap";


const Floating = (props) => {

  const linkClick = (e, link) => {
    e.preventDefault();
    window.open(link);
  };
  return (
    <Container className=''>
      <Col className='p-2'>
          <img
            src="/assets/images/LINK.png"
            className="logo"
            alt="loading"
            style={{ height: "30px", width: "30px" }}
            onClick={(e) =>
              linkClick(
                e,
                "https://www.linkedin.com/company/digital-traffic-makers"
              )
            }
          />
        </Col>
        <Col className='p-2'>
          <img
            src="/assets/images/INSTA.png"
            className="logo"
            alt="loading"
            style={{ height: "30px", width: "30px" }}
            onClick={(e) =>
              linkClick(e, "https://www.instagram.com/digitaltrafficmakers/")
            }
          />
        </Col>
        <Col className='p-2'>
          <img
            src="/assets/images/FB.png"
            className="logo"
            alt="loading"
            style={{ height: "30px", width: "30px" }}
            onClick={(e) =>
              linkClick(e, "https://www.facebook.com/digitaltrafficmakers")
            }
          />
        </Col>
        <Col className='p-2'>
          <img
            src="/assets/images/PINT.png"
            className="logo"
            alt="loading"
            style={{ height: "30px", width: "30px" }}
            onClick={(e) =>
              linkClick(e, "https://www.pinterest.com/dtrafficmakers")
            }
          />
        </Col>
        <Row>
        {/* <Col className='chat-div'>
          <img
            src="https://img.icons8.com/color/48/000000/chat--v1.png"
            className="logo"
            alt="loading"
            style={{ height: "30px", width: "30px" }}
            onClick={(e) =>props.chatClick()}
          />
        </Col> */}
        <Col className='chat-div'>
          <a href="https://wa.me/message/E5NHHYQCKMKHF1" target='_blank'>
          <img
            src="/assets/images/whatsapp.png"
            className="logo"
            style={{ height: "40px", width: "40px" }}
            // onClick={(e) =>props.chatClick()}
          />
          </a>
        </Col>
        </Row>
    </Container>
  );
};

export default Floating;
