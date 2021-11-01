import React from "react";
// import "./Floating.css";
import Button from "@restart/ui/esm/Button";
import { Container, Row, Col } from "react-bootstrap";


const Floating = () => {
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
            style={{ height: "30px", width: "30px" }}
            onClick={(e) =>
              linkClick(e, "https://www.pinterest.com/dtrafficmakers")
            }
          />
        </Col>
    </Container>
  );
};

export default Floating;
