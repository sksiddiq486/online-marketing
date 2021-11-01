import React,{useState} from "react";
import "./Floating.css";
import Button from "@restart/ui/esm/Button";
import { Container, Row, Col } from "react-bootstrap";


const Floating = (props) => {
  const [chatVisible, setChatVisible] = useState(false);

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
        <div className='chat-div'>
          <img
            src="https://img.icons8.com/color/48/000000/chat--v1.png"
            className="logo"
            style={{ height: "30px", width: "30px" }}
            onClick={(e) =>props.chatClick()}
          />
        </div>
    </Container>
  );
};

export default Floating;
