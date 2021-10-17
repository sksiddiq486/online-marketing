import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
// import { AiFillAccountBook } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const data = [
  {
    id: 1,
    title: "Who We Are",
    content: [
      {
        id: 1,
        name: "Who We Are",
      },
      {
        id: 2,
        name: "Our Work",
      },
      {
        id: 3,
        name: "Our Clients",
      },
      {
        id: 4,
        name: "Our Blog",
      },
      {
        id: 5,
        name: "Contact US",
      },
      {
        id: 5,
        name: "Careers",
      },
      {
        id: 6,
        name: "Privacy Policy",
      },
    ],
  },
  {
    id: 2,
    title: "What We Do",
    content: [
      {
        id: 1,
        name: "Creative Strategy",
      },
      {
        id: 2,
        name: "Ecommerce Web Design",
      },
      {
        id: 3,
        name: "Digital Marketing",
      },
      {
        id: 4,
        name: "SEO Company Dubai",
      },
      {
        id: 5,
        name: " Web Design & Development",
      },
      {
        id: 6,
        name: "Web Application Development",
      },
      {
        id: 7,
        name: "Content Marketing",
      },
    ],
  },
  {
    id: 3,
    title: "Contact Us",
    content: [
      {
        id: 1,
        name: "2108, Bays Water Towers",
      },
      {
        id: 2,
        name: "Business Bay, Dubai",
      },
      {
        id: 3,
        name: "United Arab Emirates",
      },
      {
        id: 4,
        name: "052 279 5901 ",
      },
      {
        id: 5,
        name: "055 647 1517",
      },
      {
        id: 6,
        name: "media@digitaltrafficmakers.com",
      },
    ],
  },
];

const Footer = () => {
  const linkClick = (e, link) => {
    e.preventDefault();
    window.open(link);
  };
  return (
    <Container className="main-containers pb-5 pt-3" fluid>
      <Row>
        {data.map((item, i) => {
          return (
            <Col className="justify-content-center d-flex">
              <div>
                <div className="titles">{item.title}</div>
                <div>
                  {item.content.map((content, index) => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {content.imgLink !== undefined ? (
                          <div style={{ paddingRight: "10px" }}>
                            <img src={content.imgLink} />
                          </div>
                        ) : null}
                        <div className="content-name">{content.name}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <Row className="d-flex align-items-center justify-content-center pt-4">
        <Button
          style={{
            height: "35px",
            width: "35px",
            backgroundColor: "#382e53",
            borderRadius: "60px",
            marginRight: "10px",
            borderWidth: 0,
            display: "flex",
          }}
          onClick={(e) =>
            linkClick(e, "https://www.facebook.com/digitaltrafficmakers")
          }
        >
          <FaFacebookF />
        </Button>
        <Button
          style={{
            height: "35px",
            width: "35px",
            backgroundColor: "#382e53",
            borderRadius: "60px",
            marginRight: "10px",
            borderWidth: 0,
            display: "flex",
          }}
          onClick={(e) =>
            linkClick(e, "https://www.instagram.com/digitaltrafficmakers/")
          }
        >
          <FaInstagram />
        </Button>
        <Button
          style={{
            height: "35px",
            width: "35px",
            backgroundColor: "#382e53",
            borderRadius: "60px",
            marginRight: "10px",
            borderWidth: 0,
            display: "flex",
          }}
          onClick={(e) =>
            linkClick(
              e,
              "https://www.linkedin.com/company/digital-traffic-makers"
            )
          }
        >
          <FaLinkedin />
        </Button>
      </Row>
      <div className="rights-reserved">
        2021 Digital Traffic Makers - Digital Marketing Agency. All Rights Reserved
      </div>
    </Container>
  );
};

export default Footer;
